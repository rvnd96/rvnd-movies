import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import paginationReducer from "./pagination/paginationSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    pagination: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;