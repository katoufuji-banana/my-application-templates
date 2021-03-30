import React from "react";
import { render } from "react-dom";
import App from "@/app";
import { GlobalProvider } from "@/context/GlobalContext";
import "@/style/index.scss";

render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById("app")
);
