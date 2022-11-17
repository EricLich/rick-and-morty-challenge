import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Characters from "./context/characterContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Characters>
      <App />
    </Characters>
  </React.StrictMode>
);
