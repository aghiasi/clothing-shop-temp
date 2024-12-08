import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProduct } from "./store/product/produckControler-action/fetchProduct";
import ProductPage from "./components/products/ProductPage";
import NotFound from "./components/NotFound";
import Cart from "./components/cart/Cart";
import { pageRefres } from "./store/user/userReducer";
function App() {
  //in first time in any urls it fetch the data form database for products and store it
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(pageRefres());
  });
  return (
    <main className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/user/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
