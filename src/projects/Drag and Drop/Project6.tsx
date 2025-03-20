import { DndProvider } from "react-dnd";

import { HTML5Backend } from "react-dnd-html5-backend";
import DayColumn from "./components/DayColumn";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const Project6 = () => {
  const todos = useSelector((state :RootState) => state.todo.todos);
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="calendar">
      {days.map((day) => (
        <DayColumn key={day} day={day} todos={todos.filter((t) => t.day === day)} />
      ))}
    </div>
  </DndProvider>
  );
};

export default Project6;