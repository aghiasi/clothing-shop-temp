import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// user actions and controllers
export const fetchUser = createAsyncThunk("user/fetchUser", async (data) => {
  const { username, password } = data;
  // this parts are hard codes cuse we dont get all data from the backend side
  const user = await axios.get("https://fakestoreapi.com/users/1");
  const token = await axios.post("https://fakestoreapi.com/auth/login", {
    username,
    password,
  });
  return [token.data.token, user.data];
});
