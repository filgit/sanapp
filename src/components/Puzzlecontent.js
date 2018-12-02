import React, { Component } from "react";

// import pic from "../pics/schnecke.jpg";

export class Puzzlecontent extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0, clickx: 0 };
  }

  render() {
    return this.props.connectDragSource (
      <div style={{ height: "100%", opacity: this.props.isDragging ? 0.5 : 1 }}>
        <p>BlaBla</p>
      </div>
    );
  }
}

