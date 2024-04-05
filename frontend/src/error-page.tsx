import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any;

  return (
    <div className="w-[100vw] flex flex-col justify-cente items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status} {error.statusText || error.message}</i>
      </p>
    </div>
  );
}