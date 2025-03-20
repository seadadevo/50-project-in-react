import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "../store";

interface WaterState {
  totalCups: number;
  fullCups: number;
}

const initialState: WaterState = {
  totalCups: 8,
  fullCups: 0,
};

const waterSlice = createSlice({
  name: "water",
  initialState,
  reducers: {
    toggleCup: (state, action: PayloadAction<number>) => {
      const cupIndex = action.payload;
      state.fullCups = cupIndex < state.fullCups ? cupIndex : cupIndex + 1;
    },
  },
});

export const { toggleCup } = waterSlice.actions;
export default waterSlice.reducer;


