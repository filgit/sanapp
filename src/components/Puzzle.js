import React, { Component } from "react";
// import CircleSeg from "components/CircleSeg.js";
// import Circle from "components/CircleSeg.js";
import { CircularRing2 } from "./CircularRing";

class Puzzle extends Component {
  render() {
    var r = [45, 150, 250];
    return (
      <svg height="1000" width="1000">
        <CircularRing2 x={500} y={500} radius={r} segNum={7} phi={15} />
      </svg>
    );
  }
}

export default Puzzle;
