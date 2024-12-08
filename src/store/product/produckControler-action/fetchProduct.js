import axios from "axios";
//fetching the all products in database and storing it the product fetch product ation and controller
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProduct = createAsyncThunk("product/fetchProduct", () => {
  return axios.get("https://fakestoreapi.com/products").then((res) => res.data);
});
