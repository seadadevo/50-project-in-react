import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "React Task", day: "Monday" },
    { id: 2, text: "Redux Task", day: "Tuesday" },
    { id: 3, text: "Fix Bugs", day: "Wednesday" },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    moveTodo: (state, action) => {
      const { id, newDay } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.day = newDay;
      }
    },
  },
});

export const { moveTodo } = todoSlice.actions;
export default todoSlice.reducer;

