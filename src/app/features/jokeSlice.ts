import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJoke = createAsyncThunk(
  "joke/fetchJoke",
  async () => {
    const res = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
        
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch joke");
    }

    const data = await res.json();
    console.log(data);

    return data.joke;
  }
);

const jokeSlice = createSlice({
  name: "joke",
  initialState: {
    joke: "Joke goes here",
    language: "en",
  },
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === "en" ? "ar" : "en";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJoke.fulfilled, (state, action) => {
      state.joke = action.payload;
    });
    builder.addCase(fetchJoke.rejected, (state, action) => {
      console.error("Failed to fetch joke:", action.error.message);
    });
  },
});

export const { toggleLanguage } = jokeSlice.actions;
export default jokeSlice.reducer;