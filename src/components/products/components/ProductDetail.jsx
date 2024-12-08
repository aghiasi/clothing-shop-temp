import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Error from "../../Error";
import ProductPageSkeleton from "./ProductPageSkeleton";
import Grid from "@mui/material/Grid2";
import { Typography, Button, Paper } from "@mui/material";
import Rating from "./Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../../store/user/userReducer";
export default function ProductDetail() {
  // this part is useing the store and the porduct id as prams will get the product form the store
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const { id } = useParams();
  const [added, setAdded] = useState("");
  const product = useSelector((state) => state.product);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const addToCardHandler = () => {
    if (token) {
      const item = product.products.find((i) => i.id === parseInt(id));
      dispatch(addToCart(item));
      setAdded("Product has been added in to ur card ");
    } else {
      setAdded("please Login first ");
    }
  };
  return (
    <>
      {product.loading && <ProductPageSkeleton />}
      {!product.loading && product.error ? (
        <>
          <ProductPageSkeleton />
          <Error error={product.error} />
        </>
      ) : null}

      {!product.loading &&
      product.products.length &&
      !isNaN(parseInt(id)) &&
      product.products.find((i) => i.id === parseInt(id)) !== undefined ? (
        product.products.map(
          (i) =>
            i.id === parseInt(id) &&
            i !== undefined && (
              <Grid
                sx={{
                  width: "90%",
                  margin: "auto",
                  marginTop: "20px",
                  padding: 5,
                }}
                component={Paper}
                container
                key={i.id}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"flex-start"}
              >
                <Grid width={1}>
                  <Typography variant="h3">{i.title}</Typography>
                </Grid>
                <Typography
                  sx={{ margin: 1 }}
                  width={1}
                  color="primary"
                  variant="h5"
                >
                  prouducts / {i.category}
                </Typography>
                <Grid
                  sx={{
                    margin: 2,
                  }}
                >
                  <img className="product-img" src={i.image} alt="" />
                </Grid>
                <Grid
                  sx={{
                    margin: 2,
                  }}
                  columnSpacing={{ xs: 5, md: 12 }}
                  display={"flex"}
                  flexDirection={"column"}
                  flexGrow={1}
                  width={2 / 4}
                >
                  <Grid className="details">
                    <Typography variant="h5">{i.description}</Typography>
                    <br />
                    <br />
                  </Grid>
                  <Rating rating={i.rating.rate} />{" "}
                  <Typography variant="span">
                    from {i.rating.count} + purchase
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h6">${i.price}</Typography>
                  <Typography color="error">
                    <br />
                    {added}
                  </Typography>
                  <Button
                    className="pruches"
                    sx={{ width: 2 / 4, margin: 5 }}
                    color="primary"
                    variant="contained"
                    onClick={addToCardHandler}
                  >
                    <AddShoppingCartIcon />
                    Add To Card
                  </Button>
                  <Button
                    className="pruches"
                    sx={{ width: 2 / 4, margin: 5 }}
                    color="secondey"
                    variant="contained"
                    disabled
                  >
                    Buy
                  </Button>

                </Grid>
              </Grid>
            )
        )
      ) : (
        <ProductPageSkeleton />
      )}
    </>
  );
}
