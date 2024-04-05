import os
import json
import random
import base64
from flask import Flask, request, jsonify, send_from_directory
from flask_socketio import SocketIO, emit, disconnect
from flask_cors import CORS
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, create_refresh_token, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from base64 import b64decode
from jwt import ExpiredSignatureError
from datetime import timedelta, datetime, timezone
from utils import generate_verification_code, prepare_data_for_client, prepare_data_for_db
from database import Database
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config["MONGO_URI"] = os.getenv('FLASK_MONGO_URI', None)
app.config['MAX_CONTENT_LENGTH'] = 1024 * 1024 * 1024
app.config["JWT_SECRET_KEY"] = base64.b64encode(os.urandom(32)).decode('utf-8')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(days=30)
app.config['JWT_REFRESH_TOKEN_EXPIRES'] = timedelta(days=60)
CORS(app, resources={r"/*": {"origins": "*"}})
database = Database(app)
socketio = SocketIO(app, cors_allowed_origins="*", max_http_buffer_size=1024 * 1024 * 1024)
jwt = JWTManager(app)

@app.route('/login', methods=['POST'])
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    user = database.user.get({"email": email})
    if user:
        if check_password_hash(user['password'], password):
            if user["email_verified"] == True:
                access_token = create_access_token(identity=email)
                refresh_token = create_refresh_token(identity=email)
                return jsonify(access_token=access_token, refresh_token=refresh_token, follow={"link": "/crypto", "replace": True}), 200
            else:
                verify_code = generate_verification_code()
                database.code.create(user["_id"], verify_code, datetime.now(timezone.utc))
                send_email(email, f'Your verify code - {verify_code}', 'Paste this code to HOH.')
                return jsonify(code_id=code_id, verify_type="email", follow={"link": "/verify", "replace": False}), 200
        else:
            return jsonify(error="Неверный E-mail или пароль"), 200
    else:
        return jsonify(error="Неверный E-mail или пароль"), 200

@app.route('/verify', methods=['POST'])
def verify():
    code_id = request.json.get('code_id', None)
    verify_type = request.json.get('verify_type', None)
    code = request.json.get('code', None)
    result = database.code.get({"_id": code_id})
    if not result:
        return jsonify(error="\'code_id\' not found"), 200
    elif int(result['verify_code']) != int(code):
        return jsonify(error="\'verify_code\' is incorrect"), 200
    else:
        user = database.user.get({"_id": result["user_id"]})
        if not user:
            return jsonify(error="\'user\' not found"), 200
        else:
            access_token = create_access_token(identity=user["email"])
            refresh_token = create_refresh_token(identity=user["email"])
            database.code.remove({"_id": result["_id"]})
            if verify_type == "email":
                database.energy.create(result["user_id"], 3, 3, 12)
                database.user.update(result["user_id"], {"$set": {"email_verified": True}})
                return jsonify(access_token=access_token, refresh_token=refresh_token, follow={"link": "/crypto", "replace": True}), 200
            elif verify_type == "create_wallet" or verify_type == "import_wallet":
                database.user.update(result["user_id"], {"$set": {"wallet_verified": True}})
                return jsonify(wallet=user["wallet"], follow={"link": "/game", "replace": True}), 200

@app.route('/resend-code', methods=['POST'])
def resend_code():
    result = database.code.get({"_id": request.json.get('code_id', None)})
    if not result:
        return jsonify(error="\'code_id\' not found"), 200
    else:
        user = database.user.get({"_id": result["user_id"]})
        if not user:
            return jsonify(error="\'user\' not found"), 200
        else:
            verify_code = generate_verification_code()
            database.code.update(result["_id"], {"$set": {"verify_code": verify_code}})
            send_email(user["email"], f'Your verify code - {verify_code}', 'Paste this code to HOH.')
            return jsonify(code_id=result["_id"]), 200

@app.route('/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user)
    refresh_token = create_refresh_token(identity=current_user)
    return jsonify(access_token=access_token, refresh_token=refresh_token), 200

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@socketio.on('connect')
@jwt_required()
def handle_connect():
    print('A user connected')

@socketio.on('disconnect')
@jwt_required()
def handle_disconnect():
    print('A user disconnected')

@socketio.on('message')
@jwt_required()
def handle_message(message):
    message = json.loads(message)
    print(message)
    
@socketio.on_error_default
def default_error_handler(e):
    if isinstance(e, ExpiredSignatureError):
        emit('message', json.dumps(["error", "Token has expired"]))
    elif 'Signature verification failed' in str(e):
        emit('message', json.dumps(["error", "Token has expired"]))
    else:
        print(str(e))

if __name__ == '__main__':
    socketio.run(app)
