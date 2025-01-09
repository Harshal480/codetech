import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";

// Create root element
const root = ReactDOM.createRoot(document.getElementById("root")); // Ensure this matches your HTML setup

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
