import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";

// Đưa component App vào thẻ <div id="root"> trong index.html
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
