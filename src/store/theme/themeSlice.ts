import { createSlice } from "@reduxjs/toolkit";

export type Theme = "acid" | "night";

interface ThemeState {
  current: Theme;
}

const initialState: ThemeState = {
  current: "night",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.current = state.current === "acid" ? "night" : "acid";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;