import "./_not-found-page.scss";

import NotFoundImage from "./asset/404.png";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <img src={NotFoundImage} alt="Not Found" />

      <div>
        <h1 className="not-found-page__title">404 - Not Found</h1>

        <p className="not-found-page__description">
          We can't find the page you were looking for.
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
