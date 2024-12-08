import Grid from "@mui/material/Grid2";
import { Box, Typography, TextField, Button } from "@mui/material";
import style from "./styles/MainStyle.module.css";
import wallet from "../static/icons/productHowItWorks1.svg";
import sit from "../static/icons/productHowItWorks2.svg";
import whille from "../static/icons/productHowItWorks3.svg";
import image from "../static/img/image-creator-B03_mapletree.webp";
import { motion } from "motion/react";
import reuseStyle from "./styles/HeaderStyle.module.css";
import FooterStyle from "./styles/FooterStyle.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
// the top part of the main and home page that contain svg and about products the sit is selling
// all of the footer parts didn't make this one nested components for simplesity
export default function TopSection() {
  return (
    <motion.div animate={{ Opacity: [0, 1], x: [200, 0], delay: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          paddingBottom: 5,
          marginBottom: "50px",
          marginTop: "50px",
        }}
      >
        <div className={reuseStyle.divider}></div>
        <Typography marginTop={5} textAlign={"center"} variant="h3">
          How it works
        </Typography>
      </Box>
      <Grid
        justifyContent={"center"}
        alignItems={"center"}
        className={style.footer}
        container
        variant="section"
        spacing={6}
      >
        <Grid size={{ xs: 8, md: 3.5 }}>
          <Box className={style.box}>
            <img className={style.wallet} src={wallet} alt="" />
            <Typography variant="h5">Exclusive rates</Typography>
            <Typography textAlign={"center"} variant="h6">
              Appointment every Wednesday 9am.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 8, md: 3.5 }}>
          <Box className={style.box}>
            <img className={style.wallet} src={sit} alt="" />
            <Typography variant="h5">New experiences</Typography>
            <Typography textAlign={"center"} variant="h6">
              First come, first served. Our offers are in limited quantities, so
              be quick.
            </Typography>
          </Box>{" "}
        </Grid>
        <Grid size={{ xs: 8, md: 3.5 }}>
          <Box className={style.box}>
            <img className={style.wallet} src={whille} alt="" />
            <Typography variant="h5">The best luxury</Typography>
            <Typography textAlign={"center"} variant="h6">
              New offers every week. New experiences, new surprises. Your
              Sundays will no longer be alike.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box position={"relative"} sx={{ height: "660px" }}>
        <img className="footer-img" src={image} alt="" />
        <Box className={FooterStyle.form}>
          <Typography variant="h3">Receive offers</Typography>
          <Typography>
            Taste the holidays of the everyday close to home.
          </Typography>
          <Box className={FooterStyle.input}>
            <TextField
              sx={{ width: 4 / 4 }}
              id="outlined-basic"
              label="inter your email"
              variant="outlined"
            />
          </Box>
          <br />
          <br />
          <Button
            className={FooterStyle.btn}
            variant="contained"
            sx={{
              backgroundColor: "black",
              borderRadius: 0,
              color: "#ffff",
              boxShadow: "none",
            }}
          >
            KEEP ME UPDATE
          </Button>
        </Box>
      </Box>
      <Box component="footer" className={FooterStyle.footerSection}>
        <Button>
          <FacebookIcon fontSize="large" />
        </Button>
        <Button>
          <GoogleIcon fontSize="large" />
        </Button>
        <Typography className={FooterStyle.copyRight}>
          © Your Website 2024
        </Typography>
      </Box>
    </motion.div>
  );
}
