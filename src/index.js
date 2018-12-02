import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/circle.css";
import * as serviceWorker from "./serviceWorker";
import Puzzle from "./components/Puzzle";
import Puzzlecontent from "./components/Puzzlecontent";

ReactDOM.render(<Puzzle />, document.getElementById("root"));
ReactDOM.render(<Puzzlecontent />, document.getElementById("content"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
