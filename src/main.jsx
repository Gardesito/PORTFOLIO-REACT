import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Rain from "./componentes/Rain/Rain.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Rain />
    <App />
  </React.StrictMode>
);
