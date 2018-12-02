import React, { Component } from "react";
import * as math from "mathjs";
import "./circle.css";

function collect(monitor) {
  return {
    highlighted: monitor.canDrop(),
    hovered: monitor.isOver()
  };
}

export class CircleSeg extends Component {
  state = {
    x: this.props.x, // Offset x
    y: this.props.y, // Offset y
    ri: this.props.ri, //inner radius
    ro: this.props.ro, // outer radus
    phi: (this.props.phi * math.PI) / 180, // rotation in rad
    arc: (this.props.arc * math.PI) / 180 // length of the arc in rad
  };

  calcPosition(x, y, ri, ro, arc, phi) {
    // referenced to coordinate system L (Local)
    var edgePointsL = [
      [0, 0],
      [ro - ri, 0],
      [+ro * math.cos(arc) - ri, -ro * math.sin(arc)],
      [-ri * (1 - math.cos(arc)), -ri * math.sin(arc)]
    ];

    // referenced to coordinate system C (Circle centrum)
    var edgePointsC = math.add(edgePointsL, [
      [ri, 0],
      [ri, 0],
      [ri, 0],
      [ri, 0]
    ]);

    // referenced to coordinate system 0 (svg element)
    // var edgePoints0 = math.add(edgePointsC, [[x, y], [x, y], [x, y], [x, y]]);

    const rotationMatrix = [
      [math.cos(phi), -math.sin(phi)],
      [math.sin(phi), math.cos(phi)]
    ];

    // copy + rotate each path point via phi
    var rotatedEdgePointsC = [...edgePointsC];

    for (let i = 0; i < 4; i++) {
      rotatedEdgePointsC[i] = math.multiply(edgePointsC[i], rotationMatrix);
    }

    // referenced to coordinatesystem CS0
    return math.add(rotatedEdgePointsC, [[x, y], [x, y], [x, y], [x, y]]);
  }

  render() {
    const { x, y, ri, ro, arc, phi } = this.state;
    const pathPoints = this.calcPosition(x, y, ri, ro, arc, phi);

    return (
      <path
        className="myclass"
        d={
          "M" +
          pathPoints[0][0] +
          " " +
          pathPoints[0][1] +
          " L" +
          pathPoints[1][0] +
          "  " +
          pathPoints[1][1] +
          " A" +
          ro +
          " " +
          ro +
          " 0 0 0 " +
          pathPoints[2][0] +
          " " +
          pathPoints[2][1] +
          " L" +
          pathPoints[3][0] +
          " " +
          pathPoints[3][1] +
          " A" +
          ri +
          " " +
          ri +
          " 0 0 1 " +
          pathPoints[0][0] +
          " " +
          pathPoints[0][1]
        }
      />
    );
  }
}
