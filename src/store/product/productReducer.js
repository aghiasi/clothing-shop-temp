import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./productInitialState/productInit";
import { fetchProduct } from "./produckControler-action/fetchProduct";
// the product reducers with asyncthunk we used in fetchproducts action and controller
const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});
export default productSlice.reducer;
