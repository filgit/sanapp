import React, { Component } from "react";
import { CircleSeg } from "./CircleSeg";

export class CircularRing2 extends Component {
  state = {
    x: this.props.x, // Offset x
    y: this.props.y, // Offset y
    radius: this.props.radius,
    segNum: this.props.segNum, // number of segments
    phi: this.props.phi // offset rotation in  °
  };

  createSegments() {
    const { x, y, radius, segNum, phi } = this.state;

    var segments = [];

    for (let k = 0; k < radius.length - 1; k++) {
      // calc length of each circular element
      var ri = radius[k];
      var ro = radius[k + 1];

      var arc = 360 / segNum;

      for (let i = 0; i < segNum; i++) {
        let gamma = i * arc + phi;
        var key = [k, i];
        segments.push(
          <CircleSeg
            x={x}
            y={y}
            ri={ri}
            ro={ro}
            arc={arc}
            phi={gamma}
            key={key.join()}
          />
        );
      }
    }
    return segments;
  }

  render() {
    return this.createSegments();
  }
}
