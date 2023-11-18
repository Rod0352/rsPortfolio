import React from "react";
import { Box, Typography } from "@mui/material";

const selfie = require("./images/Cartoon_Selfie.jpeg");
export default function Main() {
  return (
    <Box>
      <Typography variant="h1" sx={{ color: "white" }}>
        RodTs
      </Typography>
      <Box
        sx={{
          maxWidth: 600,
          height: "35vh",
          width: "100%",
          border: "1px solid red",
          backgroundImage: `url(${selfie})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px",
        }}
      ></Box>
    </Box>
  );
}
