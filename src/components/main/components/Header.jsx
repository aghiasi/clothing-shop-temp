import style from "../../styles/HeaderStyle.module.css";
import { Button, Typography } from "@mui/material";
import { motion } from "motion/react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import useMediaHead from "../../../hooks/useMediaHead";
export default function Header() {
  const responsive = useMediaHead();
  //head part of the home page the part with pool background
  return (
    <>
      <motion.header
        animate={{ opacity: [0, 1], y: [-500, 0] }}
        className={style.backgroundHead}
      >
        <Typography variant="h3">Upgrade your Sundays</Typography>
        <div className={style.divider}></div>
        <Typography variant="subtitle1">
          Enjoy secret offers up to -70% off the best luxury hotels every
          Sunday.
        </Typography>
        <Button
          sx={{ width: responsive }}
          variant="contained"
          color="error"
          className={style.noRadius}
        >
          REGISTER
        </Button>
        <Typography variant="subtitle2">
          sign up part needs real back end{" "}
        </Typography>
        <ArrowDownwardIcon className={style.arrow} />
      </motion.header>
    </>
  );
}
