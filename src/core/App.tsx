import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Page from "./components/page/Page";

import HomePage from "../home/HomePage";
import useSetDynamicVhValue from "./util/hook/useDynamicVhValue";
import NotFoundPage from "../not-found/NotFoundPage";

function App() {
  useSetDynamicVhValue();

  return (
    <Routes>
      <Route element={<Page title="Home" />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route element={<Page title="Not Found" />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
