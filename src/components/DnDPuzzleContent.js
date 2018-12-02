import { DragSource } from "react-dnd";
import { Puzzlecontent } from "./Puzzlecontent";

const Types = {
  PICTURE: "picture"
};

const PicContSource = {
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
    // const item = monitor.getItem();
    // const dropResult = monitor.getDropResult();
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

// Export the wrapped version
export default DragSource(Types.PICTURE, PicContSource, collect)(Puzzlecontent);
