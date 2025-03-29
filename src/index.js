import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"
import App from "./App";

const root = document.getElementById("root");  // Ensure "root" exists in index.html

if (root) {
    ReactDOM.createRoot(root).render(<App />);
} else {
    console.error("Root element not found! Check index.html.");
}
