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
      <Typography variant="h3">Lets create something together!</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          flexDirection: "column",
          color: "red",
        }}
      >
        <FormControl
          sx={{
            width: "50%",
            margin: "1rem",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            color="secondary"
            sx={{
              width: "100%",
            }}
          />
        </FormControl>
        <FormControl
          sx={{
            width: "50%",
            margin: "1rem",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            color="secondary"
            sx={{
              width: "100%",
            }}
          />
        </FormControl>
        <FormControl
          sx={{
            width: "50%",
            margin: "1rem",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Message"
            variant="outlined"
            color="secondary"
            sx={{
              width: "100%",
            }}
          />
        </FormControl>

        <FormControl
          sx={{
            width: "50%",
            margin: "1rem",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            color="secondary"
            sx={{
              width: "100%",
            }}
          />
        </FormControl>
      </Box>
    </Box>
  );
};
