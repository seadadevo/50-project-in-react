import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "React Task", day: "Monday" },
    { id: 2, text: "Redux Task", day: "Tuesday" },
    { id: 3, text: "Fix Bugs", day: "Wednesday" },
    { id: 4, text: "debug Bugs", day: "Wednesday" },
    { id: 5, text: "Js Task", day: "Saturday" },
    { id: 6, text: "NodeJs Task", day: "Monday" },
    { id: 7, text: "DB Task", day: "Monday" },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    moveTodo: (
      state,
      action: PayloadAction<{ id: number; newDay: string }>
    ) => {
      // const { id, newDay } = action.payload;
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.day = action.payload.newDay;
      }
    },
  },
});

export const { moveTodo } = todoSlice.actions;
export default todoSlice.reducer;
