from flask_pymongo import PyMongo
from utils import prepare_data_for_client, prepare_data_for_db

class Settings:
    def __init__(self, mongo):
        self.mongo = mongo

    def create(self, string):
        return prepare_data_for_client(
            self.mongo.db.settings.insert_one(
                prepare_data_for_db({
                    "string": string
                }
            )).inserted_id
        )

    def update(self, id, data):
        self.mongo.db.settings.update_one({"_id": prepare_data_for_db(id)}, data)
    
    def is_exists(self, data):
        if self.mongo.db.users.find_one(data):
            return True
        else:
            return False
    
    def get(self, data):
        return prepare_data_for_client(
            self.mongo.db.users.find_one(prepare_data_for_db(data))
        )

class User:
    def __init__(self, mongo):
        self.mongo = mongo

    def create(self, phone, avatar):
        return prepare_data_for_client(
            self.mongo.db.users.insert_one(
                prepare_data_for_db({
                    "phone": phone,
                    "avatar": avatar
                }
            )).inserted_id
        )

    def update(self, id, data):
        self.mongo.db.users.update_one({"_id": prepare_data_for_db(id)}, data)
    
    def is_exists(self, data):
        if self.mongo.db.users.find_one(data):
            return True
        else:
            return False
    
    def get(self, data):
        return prepare_data_for_client(
            self.mongo.db.users.find_one(prepare_data_for_db(data))
        )

    def search(self, data):
        return prepare_data_for_client(
            list(self.mongo.db.users.find_one(prepare_data_for_db(data)))
        )

class Code:
    def __init__(self, mongo):
        self.mongo = mongo

    def create(self, user_id, verify_code, created_at):
        self.mongo.db.codes.delete_many({
            "user_id": prepare_data_for_db(user_id)
        })
        return prepare_data_for_client(
            self.mongo.db.codes.insert_one(
                prepare_data_for_db({
                    "user_id": user_id,
                    "verify_code": verify_code,
                    "created_at": created_at
                })
            ).inserted_id
        )

    def update(self, id, data):
        self.mongo.db.codes.update_one({"_id": prepare_data_for_db(id)}, data)
    
    def get(self, data):
        return prepare_data_for_client(
            self.mongo.db.codes.find_one(prepare_data_for_db(data))
        )

    def remove(self, data):
        self.mongo.db.codes.delete_many(prepare_data_for_db(data))

class Database:
    def __init__(self, app):
        self.mongo = PyMongo(app)
        self.settings = Settings(self.mongo)
        self.user = User(self.mongo)
        self.code = Code(self.mongo)