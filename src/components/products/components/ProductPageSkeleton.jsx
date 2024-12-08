import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
export default function SkeletonColor() {
  // this just a skeleton compo for loading and when we have a problem
  return (
    <>
      <Box
        sx={{
          p: 8,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Skeleton>
          <Typography variant="h1">product is loading pls w8 ....</Typography>
        </Skeleton>
      </Box>
      <Box
        sx={{
          p: 8,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Skeleton>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            reprehenderit aperiam, facere sit optio explicabo cum iusto velit
            quia vitae aliquid, iste laboriosam obcaecati accusamus quisquam
            fugit! Ad, dolorum vitae?
          </Typography>
        </Skeleton>
      </Box>
      <Box
        sx={{
          p: 8,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Skeleton>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            reprehenderit aperiam, facere sit optio explicabo cum iusto velit
            quia vitae aliquid, iste laboriosam obcaecati accusamus quisquam
            fugit! Ad, dolorum vitae?
          </Typography>
        </Skeleton>
      </Box>
      <Box
        sx={{
          p: 8,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Skeleton>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            reprehenderit aperiam, facere sit optio explicabo cum iusto velit
            quia vitae aliquid, iste laboriosam obcaecati accusamus quisquam
            fugit! Ad, dolorum vitae?
          </Typography>
        </Skeleton>
      </Box>
      <Box
        sx={{
          p: 8,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Skeleton>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            reprehenderit aperiam, facere sit optio explicabo cum iusto velit
            quia vitae aliquid, iste laboriosam obcaecati accusamus quisquam
            fugit! Ad, dolorum vitae?
          </Typography>
        </Skeleton>
      </Box>
    </>
  );
}
