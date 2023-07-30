import { Box, FormControl, TextField, Typography } from "@mui/material";
import React from "react";

export const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        // height: "100vh",
        // display: "flex",
        color: "#fff",

        // justifyContent: "center",
      }}
    >
      <Typography variant="h3">Contact</Typography>
      <FormControl>
        <TextField sx={{ color: "#fff" }} label="Name" />
        <TextField label="Email" />
        <TextField label="Message" />
      </FormControl>
    </Box>
  );
};
