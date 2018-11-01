import React, { Component } from "react";
import * as math from "mathjs";
import { CircleSeg } from "./CircleSeg";

export class CircularRing extends Component {
  state = {
    x: this.props.x, // Offset x
    y: this.props.y, // Offset y
    ringNum: this.props.ringNum, // number of rings
    segNum: this.props.segNum, // number of segments
    phi: this.props.phi // rotation in rad °
  };

  createSegments() {
    const { x, y, ringNum, segNum, phi } = this.state;

    var ri = 100;
    var ro = 200;
    var segments = [];

    // calc length of each circular element
    var arc = 360 / segNum;

    for (let i = 0; i < segNum; i++) {
      let gamma = i * arc;

      segments.push(
        <CircleSeg
          x={x}
          y={y}
          ri={ri}
          ro={ro}
          arc={arc}
          phi={gamma}
          key={String(i)}
        />
      );
    }
    return segments;
  }

  render() {
    return this.createSegments();
  }
}
