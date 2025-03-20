import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../app/features/project1Slice";
import cardReducer from "../app/features/cardSlice";
import boxReducer from "../app/features/boxSlice";
import counterReducer from "../app/features/counterSlice";
import jokeReducer from "../app/features/jokeSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    card: cardReducer,
    box: boxReducer,
    counter: counterReducer,
    joke: jokeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;



