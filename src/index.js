import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorker.unregister();
serviceWorker.register()