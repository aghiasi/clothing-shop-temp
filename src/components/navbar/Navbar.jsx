import style from "../styles/NavbarStyle.module.css";
import { motion } from "motion/react";
import { useState } from "react";
import NavMenu from "./components/NavMenu";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router";
import { Button, IconButton, Typography, Toolbar } from "@mui/material";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UserModal from "./components/UserModal";
export default function Navbar() {
  const user = useSelector((state) => state.user);
  //this useState is for modale opening and closeing
  const [openLogin, setOpenLogin] = useState(false);
  const [open, setOpen] = useState(false);
  //nav bar compo
  return (
    <motion.div
      className={style.navbar}
      animate={{ Opacity: [0, 1], y: [-300, 0] }}
    >
      <NavMenu openLogin={openLogin} setOpenLogin={setOpenLogin} />
      <UserModal open={open} setOpen={setOpen} />
      <Toolbar>
        {user.token && (
          <IconButton onClick={() => setOpen(true)}>
            <AccountCircleIcon sx={{ color: "#ffff" }} />
          </IconButton>
        )}
        {!user.token && (
          <Button
            onClick={() => setOpenLogin(true)}
            variant="contained"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, background: "#424551" }}
          >
            Login
          </Button>
        )}
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Shope site
        </Typography>
        {user.token && (
          <IconButton to={"/user/cart"} component={Link}>
            <ShoppingCartIcon sx={{ color: "white" }} />
          </IconButton>
        )}
        <IconButton to={"/"} component={Link}>
          <HomeIcon sx={{ color: "white" }} />
        </IconButton>
      </Toolbar>
    </motion.div>
  );
}
