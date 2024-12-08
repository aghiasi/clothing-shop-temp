import userReducer from "./user/userReducer";
import porductReducer from "./product/productReducer";
// it's redux its better to have smaller parts for it for debug and working with
export const reducer = {
  product: porductReducer,
  user: userReducer,
};
