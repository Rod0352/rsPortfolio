import {
  Box,
  FormControl,
  TextField,
  Typography,
  outlinedInputClasses,
} from "@mui/material";
import React from "react";

export const Contact = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "35rem",
          flexDirection: "column",
          color: "white",
          padding: 5,
          width: "35rem",
          backgroundColor: "red ",
          opacity: 0.8,
          borderRadius: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "35rem",
          flexDirection: "column",
          color: "white",
          padding: 5,
          width: "35rem",
          backgroundColor: "red ",
          opacity: 0.8,
          borderRadius: "100%",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      ></Box>
      <Box
        sx={{
          color: "#fff",
        }}
      >
        <Typography sx={{ zIndex: 7 }} variant="h3">
          Lets create something together!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "35rem",
            flexDirection: "column",
            color: "white",
            padding: 5,
            width: "35rem",
            backgroundColor: "red ",
            opacity: 0.95,
            borderRadius: "100%",
            zIndex: 7,
          }}
        >
          <FormControl
            sx={{
              margin: "1rem",
              color: "white",
            }}
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              color="info"
              sx={{
                width: "100%",
                color: "white",
                backgroundColor: "red",
                border: "1px solid white",
                borderRadius: "5px",
              }}
            />
          </FormControl>
          <FormControl
            sx={{
              width: "50%",
              margin: "1rem",
              color: "white",
            }}
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              color="secondary"
              sx={{
                width: "100%",
                backgroundColor: "red",
                border: "1px solid white",
                borderRadius: "5px",
                color: "white",
              }}
            />
          </FormControl>
          <FormControl
            sx={{
              width: "50%",
              margin: "1rem",
              color: "white",
            }}
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              color="secondary"
              sx={{
                width: "100%",
                backgroundColor: "red",
                border: "1px solid white",
                borderRadius: "5px",
                color: "white",
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
              variant="outlined"
              color="secondary"
              sx={{
                width: "100%",
                backgroundColor: "red",
                border: "1px solid white",
                borderRadius: "5px",
              }}
            />
          </FormControl>
        </Box>
      </Box>
    </>
  );
};
