import React, { Component } from "../node_modules/react";
// import CircleSeg from "components/CircleSeg.js";
// import Circle from "components/CircleSeg.js";
import { CircularRing } from "./components/CircularRing";

class Puzzle extends Component {
  render() {
    return (
      <svg height="1000" width="1000">
        <CircularRing x={500} y={500} ringNum={200} segNum={25} phi={0} />
      </svg>
    );
  }
}

export default Puzzle;
