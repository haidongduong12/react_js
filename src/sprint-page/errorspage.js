import { useRouteError } from "react-router-dom";
import "../sprint-page/errorspage.css";

export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);

  return (
    <div id="error-page" className="flex">
      <div>
        <h1>Oops!</h1>
        <p>Sorry, it seems the link is invalid.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
