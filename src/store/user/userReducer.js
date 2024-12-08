import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./userInitialState/userInit";
import { fetchUser } from "./userControler-action/fetchUser";
// this part is complex cuse we useing fake api and it is not returning all the data we have to get so i made it like the api is working like real one
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutReducer(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.token = "";
      state.userData = [];
    },
    // if we refresh the browser this part will handle that but geting all data from local store and not leting we fetch from server untille we not need this part is handled in next.js better
    // by csr and ssr parts
    pageRefres(state) {
      //this part check if the user is have the token else it would clear the state and make uesr to log in
      if (localStorage.getItem("token") !== null) {
        state.token = localStorage.getItem("token");
        state.userData = JSON.parse(localStorage.getItem("user"));
        state.cart = JSON.parse(localStorage.getItem("cart"));
        let prices = 0;
        const total = state.cart.map((cart) => {
          return cart.price;
        });
        for (const i of total) {
          prices += i;
        }
        state.total = prices;
      } else {
        state.token = "";
        state.userData = [];
        state.cart = [];
      }
    },
    // this part is adding product to card and localstore
    addToCart(state, action) {
      localStorage.removeItem("cart");
      state.cart = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(state.cart));
      let prices = 0;
      const total = state.cart.map((cart) => {
        return cart.price;
      });
      for (const i of total) {
        prices += i;
      }
      state.total = prices;
    },
    //deletes item that user seleck to delete form store and localstre
    // this part is just have one problem cuse we working with fake api and that is we can not add items in data base and filter them by id or date or ...
    //so when we deleting an item if we have the same item more times it will delete them also so forgive me for that one
    //i could make the date for it and check the date for each item and delete by id and date but its just mock data and backend
    deleteFromCard(state, action) {
      localStorage.removeItem("cart");
      state.cart = state.cart.filter((item) => {
        return item.id !== action.payload;
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
      let prices = 0;
      const total = state.cart.map((cart) => {
        return cart.price;
      });
      for (const i of total) {
        prices += i;
      }
      state.total = prices;
    },
  },
  //if the userdata and cart and token not in localstore we getit from api in login part
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload[0];
      state.userData = action.payload[1];
      state.error = "";
      localStorage.setItem("token", action.payload[0]);
      localStorage.setItem("user", JSON.stringify(action.payload[1]));
      let prices = 0;
      const total = state.cart.map((cart) => {
        return cart.price;
      });
      for (const i of total) {
        prices += i;
      }
      state.total = prices;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.token = "";
      state.error = action.error.message;
    });
  },
});
export const { pageRefres, addToCart, deleteFromCard, logoutReducer } =
  userSlice.actions;
export default userSlice.reducer;
