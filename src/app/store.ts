import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../app/features/project1Slice";
import cardReducer from "../app/features/cardSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    card: cardReducer,
  },
});



