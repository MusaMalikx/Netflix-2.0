import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./slices/navbarSlice";
import previewReducer from "./slices/previewSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    preview:previewReducer,
  },
});
