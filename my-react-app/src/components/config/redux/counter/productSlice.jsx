import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "counter",
  initialState: {
    products: JSON.parse(localStorage.getItem("productList")) || [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem("productList", JSON.stringify(state.products));
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
