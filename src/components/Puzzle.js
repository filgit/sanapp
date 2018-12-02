import React, { Component } from "react";
// import CircleSeg from "components/CircleSeg.js";
// import Circle from "components/CircleSeg.js";
import { CircularRing2 } from "./CircularRing";
import PuzzleContent from "./DnDPuzzleContent";
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Puzzle extends Component {
  render() {
    var r = [45, 150, 250];
    return (
      <DragDropContextProvider style={{position: "relative"}} backend={HTML5Backend}>
      <svg height="1000" width="1000" style={{zIndex:-1, position: "absolute", top:0, left: 0}}>
        <CircularRing2 x={500} y={500} radius={r} segNum={7} phi={15} />
      </svg>
      <PuzzleContent text="yeah" style={{position: "absolute", left: 100, top: 500, zIndex: 10}}> asdfasdf</PuzzleContent>
      </DragDropContextProvider>
    );
  }
}

export default Puzzle;
