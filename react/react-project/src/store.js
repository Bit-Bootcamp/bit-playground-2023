import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./redux/themeSlice";
import userReducer from "./redux/userSlice";
import { countriesApi } from "./redux/services/countriesApi";

export default configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});

/* state = {
  theme: {
    isDark: false
  }
} */
