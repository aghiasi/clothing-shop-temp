import { useTheme } from "@mui/material/styles";
import {
  Typography,
  useMediaQuery,
  DialogTitle,
  DialogContent,
  Dialog,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
// this part is just icons form mui lol
import PersonIcon from "@mui/icons-material/Person";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SignpostIcon from "@mui/icons-material/Signpost";
import FifteenMpIcon from "@mui/icons-material/FifteenMp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "motion/react";
import { logoutReducer } from "../../../store/user/userReducer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function UserModal({ open, setOpen }) {
  const logoutHandler = () => {
    dispatch(logoutReducer());
    setOpen(false);
  };
  // this user modal checks if there is no userdata and token then renders to the user by conditions
  const { userData, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {token && (
        <motion.div animate={{ x: [-5000, 0] }}>
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle variant="h3" id="responsive-dialog-title">
              <IconButton onClick={() => setOpen(false)}>
                <ArrowBackIosIcon />
              </IconButton>{" "}
              {userData.username} profile
            </DialogTitle>
            <DialogContent sx={{ width: "600px" }}>
              <Avatar sx={{ width: 100, height: 100, margin: "10px 0" }} />

              <Typography display={"flex"}>
                <PersonIcon fontSize="small" /> Name : {userData.name.firstname}
              </Typography>

              <Typography display={"flex"}>
                <Diversity3Icon fontSize="small" />
                Lastname : {userData.name.lastname}
              </Typography>

              <Typography display={"flex"}>
                <AlternateEmailIcon fontSize="small" />
                Email : {userData.email}
              </Typography>

              <Typography display={"flex"}>
                <LocationCityIcon fontSize="small" />
                City : {userData.address.city}
              </Typography>

              <Typography display={"flex"}>
                <SignpostIcon fontSize="small" />
                Street : {userData.address.street}
              </Typography>
              <Typography display={"flex"}>
                <FifteenMpIcon fontSize="small" />
                Number : {userData.address.number}
              </Typography>
              <Typography display={"flex"}>
                <LocalShippingIcon fontSize="small" />
                Zipcode : {userData.address.zipcode}
              </Typography>
              <Typography display={"flex"}>
                <LocalPhoneIcon fontSize="small" />
                Phone : {userData.address.zipcode}
              </Typography>
              <Button onClick={logoutHandler} variant="contained" color="error">
                Logout from account{" "}
              </Button>
              <Button sx={{ margin: "10px" }}>Edit your account info</Button>
            </DialogContent>
          </Dialog>
        </motion.div>
      )}
    </>
  );
}
