import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Page from "./components/page/Page";

import HomePage from "./home/HomePage";
import useSetDynamicVhValue from "./util/hook/useDynamicVhValue";

function App() {
  useSetDynamicVhValue();

  return (
    <Routes>
      <Route element={<Page title="Home" />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
