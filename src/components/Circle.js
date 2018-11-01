import React, { Component } from "../react";
export class Circle extends Component {
  state = {
    x: this.props.x,
    y: this.props.y,
    r: this.props.r
  };

  handleMouseDown = e => {
    this.coords = {
      x: e.pageX,
      y: e.pageY
    };
    document.addEventListener("mousemove", this.handleMouseMove);
  };

  handleMouseUp = () => {
    document.removeEventListener("mousemove", this.handleMouseMove);
    this.coords = {};
  };

  handleMouseMove = e => {
    const xDiff = this.coords.x - e.pageX;
    const yDiff = this.coords.y - e.pageY;

    this.coords.x = e.pageX;
    this.coords.y = e.pageY;

    this.setState({
      x: this.state.x - xDiff,
      y: this.state.y - yDiff
    });
  };

  render() {
    const { x, y, r } = this.state;
    return (
      <circle
        r={r}
        cx={x}
        cy={y}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        stroke="black"
        strokeWidth="1"
        fill="white"
      />
    );
  }
}
