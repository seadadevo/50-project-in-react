import { useDrag } from "react-dnd";
import "../dragstyle.css"
const TodoItem = ({ todo }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TODO",
    item: { id: todo.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="todo"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {todo.text}
    </div>
  );
};

export default TodoItem;
