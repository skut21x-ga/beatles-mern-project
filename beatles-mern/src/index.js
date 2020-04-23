import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();

// jwt code from https://git.generalassemb.ly/dc-wdi-react-redux/react-jwt-authentication

app.use(cors());
app.use(parser.json());
app.listen(3000, () => console.log("Listening on port 3000 :)"));

const passport = require("./config/passport")();

const userController = require("./controllers/users.js");

app.use("/users", userController);

app.use(passport.initialize());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
