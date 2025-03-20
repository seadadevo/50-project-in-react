import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../app/features/project1Slice";
import cardReducer from "../app/features/cardSlice";
import boxReducer from "../app/features/boxSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    card: cardReducer,
    box: boxReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;



