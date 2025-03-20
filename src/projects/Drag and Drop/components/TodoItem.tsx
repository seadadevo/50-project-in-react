import { useDrag, DragPreviewImage } from "react-dnd";
import "../dragstyle.css";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useEffect } from "react";
const TodoItem = ({ todo }) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "TODO",
    item: { id: todo.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // useEffect(() => {
  //   dragPreview(getEmptyImage(), { captureDraggingState: true });
  // }, []);
  return (
    <>
      {/* <DragPreviewImage connect={dragPreview} src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" /> */}
      <div
        ref={drag}
        className="todo"
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        {todo.text}
      </div>
    </>
  );
};

export default TodoItem;
