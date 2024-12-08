import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
export const store = configureStore({
  reducer,
});
// all the magic is here in the store