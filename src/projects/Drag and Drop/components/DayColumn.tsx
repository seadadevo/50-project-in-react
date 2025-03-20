import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { moveTodo } from "../../../app/features/todoSlice";
import TodoItem from "./TodoItem";
import "../dragstyle.css";
interface DayColumnProps {
  day: string;
  todos: { id: string; newDay: string }[];
}

const DayColumn = ({ day, todos }: DayColumnProps) => {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TODO",
    drop: (item) => dispatch(moveTodo({ id: item.id, newDay: day })),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="day-column"
      style={{ background: isOver ? "#ddd" : "#fff" }}
    >
      <h3>{day}</h3>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default DayColumn;
