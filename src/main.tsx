import "./core/ui/styles/_override.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App";
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
