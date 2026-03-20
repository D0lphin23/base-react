import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const elem = (
    <div>
        <h1>Hello World</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
