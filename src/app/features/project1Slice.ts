import { createSlice } from "@reduxjs/toolkit";

const IMAGES = [
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
  "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
];

interface InitialState {
  activeSlide: number;
  images: string[];
}

const initialState: InitialState = {
  activeSlide: 0,
  images: IMAGES
}

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: { 
    nextSlide: (state) => {
    // state.activeSlide = state.activeSlide === state.images.length - 1 ? 0 : state.activeSlide += 1
    state.activeSlide = Math.abs((state.activeSlide + 1) % state.images.length)
  },
  prevSlide: (state) => {
    state.activeSlide = Math.abs((state.activeSlide - 1 + state.images.length) % state.images.length)
    // state.activeSlide = state.activeSlide === 0 ? state.images.length -1 : state.activeSlide -= 1
    },
  }
})
export const { nextSlide, prevSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
