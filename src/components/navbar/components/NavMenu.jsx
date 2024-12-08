import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  TextField,
  Typography,
  useMediaQuery,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  IconButton,
} from "@mui/material";
import style from "../../styles/NavbarStyle.module.css";
import { motion } from "motion/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUser } from "../../../store/user/userControler-action/fetchUser";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function NavMenu({ openLogin, setOpenLogin }) {
  //data from redux store
  const user = useSelector((state) => state.user);
  //saveing data from inputs and login in with it with redux fetchingAction
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClose = () => {
    dispatch(fetchUser({ username, password }));
  };
  //this part is modal for sign in or login part of the nav compo
  return (
    <>
      {!user.token && (
        <motion.div animate={{ x: [-5000, 0] }}>
          <Dialog
            fullScreen={fullScreen}
            open={openLogin}
            onClose={() => setOpenLogin(false)}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle variant="h3" id="responsive-dialog-title">
              <IconButton onClick={() => setOpenLogin(false)}>
                <ArrowBackIosIcon />
              </IconButton>{" "}
              {"Upgrade your Sundays"}
            </DialogTitle>

            <DialogContent>
              <DialogContentText variant="h6">
                Login to ur account to get more details and offers
              </DialogContentText>
            </DialogContent>
            <DialogActions className={style.form}>
              {user.error && (
                <Typography color="error">
                  username or password is worng
                </Typography>
              )}
              <div>
                <TextField
                  id="SignUserName"
                  label="User Name"
                  variant="outlined"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <TextField
                  type="password"
                  id="SignPassword"
                  label="password"
                  variant="outlined"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  size="xl"
                  color="secondery"
                  autoFocus
                  onClick={handleClose}
                >
                  Login
                </Button>
                <Button
                  disabled
                  variant="contained"
                  size="xl"
                  color="error"
                  autoFocus
                >
                  Sign Up
                </Button>
              </div>
              <p>
                sign up part needs real back end // username :johnd // password
                : m38rmF$
              </p>
            </DialogActions>
          </Dialog>
        </motion.div>
      )}
    </>
  );
}
