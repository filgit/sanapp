import React, { Component } from "react";
import pic from "../pics/schnecke.jpg";

class Puzzlecontent extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.state = { x: 0, y: 0, clickx: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.pageX,
      y: event.pageY
    });
  }

  handleMouseDown(event) {
    this.setState({
      clickx: event.pageX
    });
  }

  render() {
    return (
      <div
        style={{ height: "100%" }}
        draggable
        onMouseMove={this.handleMouseMove}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        {/* ...but how do we render something other than a <p>? */}
        <p>
          The current mouse position is ({this.state.x}, {this.state.y}
          ). Clickdown is {this.state.clickx}
        </p>
      </div>
    );
  }
}

export default Puzzlecontent;
