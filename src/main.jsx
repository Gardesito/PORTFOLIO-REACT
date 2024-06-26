import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Rain from "./componentes/rain";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Rain />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
