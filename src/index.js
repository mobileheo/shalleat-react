import React from "react";
import ReactDOM from "react-dom";
import "daemonite-material/css/material.css";
import "daemonite-material/js/material.min";
import "./styles/css/index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
