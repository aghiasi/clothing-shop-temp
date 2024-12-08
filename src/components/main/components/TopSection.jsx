import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import style from "../../styles/MainStyle.module.css";
import wallet from "../../../static/icons/productValues3.svg";
import whille from "../../../static/icons/productValues2.svg";
import sit from "../../../static/icons/productValues1.svg";
import { motion } from "motion/react";
import reuseStyle from "../../styles/HeaderStyle.module.css";
// the top part of the main and home page that contain svg and about products the sit is selling
export default function TopSection() {
  return (
    <motion.div animate={{ Opacity: [0, 1], x: [200, 0], delay: 2 }}>
      <Grid className={style.container} container variant="section" spacing={6}>
        <Grid size={{ xs: 8, md: 3.5 }}>
          <Box className={style.box}>
            <img className={style.wallet} src={wallet} alt="" />
            <Typography variant="h5">Exclusive rates</Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              iste quisquam.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 8, md: 3.5 }}>
          <Box className={style.box}>
            <img className={style.wallet} src={sit} alt="" />
            <Typography variant="h5">New experiences</Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              unde ullam,
            </Typography>
          </Box>{" "}
        </Grid>
        <Grid size={{ xs: 8, md: 3.5 }}>
          <Box className={style.box}>
            <img className={style.wallet} src={whille} alt="" />
            <Typography variant="h5">The best luxury</Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              mollitia quo
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography
        sx={{ marginBottom: 5, marginTop: 5, textAlign: "center" }}
        variant="h3"
      >
        For all tastes and all desires
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", paddingBottom: 10 }}
      >
        <div className={reuseStyle.divider}></div>
      </Box>
    </motion.div>
  );
}
