import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../src/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
