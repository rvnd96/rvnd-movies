import { createSlice } from "@reduxjs/toolkit";

export type Theme = "cupcake" | "forest";

interface ThemeState {
  current: Theme;
}

const initialState: ThemeState = {
  current: "forest",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.current = state.current === "cupcake" ? "forest" : "cupcake";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;