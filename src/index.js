import React from "react";
import { render } from "react-dom";

import App from "./App";
import "./i18n";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);