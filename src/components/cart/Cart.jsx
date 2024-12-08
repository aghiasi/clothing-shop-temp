import { useSelector } from "react-redux";
import {
  Avatar,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
import Skeleton from "../products/components/ProductPageSkeleton";
import { deleteFromCard } from "../../store/user/userReducer";
import NavMenu from "../navbar/components/NavMenu";
import { useEffect, useState } from "react";
export default function Card() {
  const [openLogin,setOpenLogin]= useState(false)
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // datas that we need from redux store to handle this page
  const { cart, loading, total, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    !token && setOpenLogin(true)
  },[token])
  return (
    <>
      {/* we check if the loading is done and if the cart has item in it so we show them to user if there is no item it will send massage to go back to store to but products  */}
      {loading && <Skeleton />}
      {!loading && cart.length && token ? (
        <TableContainer
          component={Paper}
          sx={{ width: "95%", margin: "25px auto" }}
        >
          <Table sx={{ minWidth: 300 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  Details
                </TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Desc</TableCell>

                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Avatar className="avatar" src={item.image} />
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "1",
                        WebkitBoxOrient: "vertical",
                        color: "text.secondary",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">${item.price}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => dispatch(deleteFromCard(item.id))}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2} align="right">
                  Total
                </TableCell>
                <TableCell>${parseFloat(total.toFixed(2))}</TableCell>
                <TableCell align="right"><Button variant="contained">pruchase</Button></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <>
          <Typography variant="h4" textAlign={"center"}>
            You have to add product to ur cart first
            {!token && (<Typography>
              You are not Loged in 
                  </Typography>
              )}
          </Typography>
          <Skeleton />
        </>
      )}
      {/* if the token is not in store and localstore it will send user login modal
      to login */}
      {!token && <NavMenu openLogin={openLogin} setOpenLogin={setOpenLogin} />}
    </>
  );
}
