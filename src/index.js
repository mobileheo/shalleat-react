import React from "react";
import ReactDOM from "react-dom";
// import daemonite from "daemonite-material";
// /Users/mobileheo/shall_eat/react-shalleat/node_modules/daemonite-material/css

import "./styles/css/index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// console.log(daemonite);
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
