import { useRouteError } from "react-router-dom";
import "../sprint-page/errorspage.css";
import Header from "../components/header";

export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);

  return (
    <div id="error-page" className="flex">
      <Header></Header>

      <div class="container-fluid py-5">
        <div class="container py-5 text-center">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <i
                class="bi bi-exclamation-triangle display-1 text-secondary"
                style={{ display: "block" }}
              ></i>
              <h1 class="display-1" style={{ display: "none" }}>
                404
              </h1>
              <h1 style={{ fontSize: "6rem", marginTop: "100px" }}>404</h1>
              <h1 class="mb-4">
                <i>{error.statusText || error.message}</i>
              </h1>
              <p class="mb-4">
                We’re sorry, the page you have looked for does not exist in our
                website! Maybe go to our home page or try to use a search?
              </p>
              <a class="btn border-secondary rounded-pill py-3 px-5" href="/">
                Go Back To Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
