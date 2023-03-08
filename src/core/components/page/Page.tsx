import "./_page.scss";

import classNames from "classnames";
import {Outlet} from "react-router-dom";
import {useLayoutEffect} from "react";

import Header from "./header/Header";
import Footer from "./footer/Footer";

interface PageProps {
  title: string;
  customClassName?: string;
}

function Page({customClassName, title}: PageProps) {
  useLayoutEffect(() => {
    document.title = `${title} | AI Image Generator`;
  }, [title]);

  return (
    <div className={classNames("page", customClassName)}>
      <Header />

      <main className={"page-content"}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Page;
