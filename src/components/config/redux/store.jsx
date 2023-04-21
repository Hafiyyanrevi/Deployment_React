import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./counter/productSlice";

const store = configureStore({
  reducer: productSlice,
});

export default store;
