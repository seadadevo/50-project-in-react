// cardSlice.js
import { createSlice } from "@reduxjs/toolkit";

interface CardState {
  headerImg: string;
  title: string;
  excerpt: string;
  profileImg: string;
  name: string;
  date: string;
  loading: boolean;
}
export interface RootState  {
  card: CardState;
}

const initialState = {
  headerImg: "",
  title: "",
  excerpt: "",
  profileImg: "",
  name: "",
  date: "",
  loading: true,
};


const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setData: (state, action) => {
      return { ...action.payload, loading: false };
    },
  },
});

export const { setData } = cardSlice.actions;
export default cardSlice.reducer;
