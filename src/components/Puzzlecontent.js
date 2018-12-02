import React, { Component } from "react";
import { DragSource } from "react-dnd";
import pic from "../pics/schnecke.jpg";

const Types = {
  PICTURE: "picture"
};

const PicSource = {
  beginDrag(props) {
    // Return the data describing the dragged item
    const item = { id: props.id };
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    // CardActions.moveCardToList(item.id, dropResult.listId);
  }
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

class Puzzlecontent extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.state = { x: 0, y: 0, clickx: 0 };
  }

  const { isDragging, connectDragSource } = props;

  render() {
    return (
      <div style={{ height: "100%" }}>
        <p>BlaBla</p>
      </div>
    );
  }
}

export default Puzzlecontent;
