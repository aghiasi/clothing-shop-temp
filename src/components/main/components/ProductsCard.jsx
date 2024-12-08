import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import Error from "../../Error";
import ProductsCardSkeleton from "./productsCardSkeleton";
//product card that is rendering in the page after stored in the redux store for ruseing it and not fetching the data all the time to have faster website this part is better handled in the next.js
export default function ProductCard() {
  //we select the product from store
  const product = useSelector((state) => state.product);
  return (
    <>
      {/* checks if the date fetched and display the right content to the user  */}
      {/* for styling part i did use css module and mui sx styling to just show i can hendle both of them it would so complexing if i used more modules like sass or styled components */}
      {product.loading && <ProductsCardSkeleton />}
      {!product.loading && product.error ? (
        <>
          <ProductsCardSkeleton />
          <Error error={product.error} />
        </>
      ) : null}
      {!product.loading && product.products.length ? (
        <Grid
          container
          alignItems={"stretch"}
          justifyContent={"space-evenly"}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          display={"flex"}
          flexGrow={1}
        >
          {product.products.map((product) => (
            <Grid
              key={product.id}
              container
              alignItems={"stretch"}
              justifyContent={"space-evenly"}
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              display={"flex"}
              flexGrow={1}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "1",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                        color: "text.secondary",
                      }}
                      variant="body2"
                    >
                      {product.description}
                      <br />
                      {product.category}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <span>${product.price}</span>
                  <Button
                    component={Link}
                    to={`/product/${product.id}`}
                    sx={{ marginLeft: 200 }}
                    variant="contained"
                    color="primary"
                  >
                    Buy
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : null}
    </>
  );
}
