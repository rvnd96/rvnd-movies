import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  currentPage: number;
  searchQuery: string;
}

const initialState: PaginationState = {
  currentPage: 1,
  searchQuery: "",
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    nextPage(state) {
      state.currentPage += 1;
    },
    prevPage(state) {
      if (state.currentPage > 1) state.currentPage -= 1;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
  },
});

export const { setPage, nextPage, prevPage, setSearchQuery } = paginationSlice.actions;
export default paginationSlice.reducer;
