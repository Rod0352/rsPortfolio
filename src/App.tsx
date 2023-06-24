import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GreettingText } from "./display/GreetingText";

const theme = createTheme({
  typography: {
    fontFamily: "Raleway",
  },
  palette: {
    primary: {
      main: "#343331",
    },
    secondary: {
      main: "#363636",
    },
  },
});

function App() {
  // set timeout to change textDone to true
  const [textDone, setTextDone] = useState(false);

  // set timeout to change textDone to true
  useEffect(() => {
    setTimeout(() => {
      setTextDone(true);
    }, 9000);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "primary.main",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
         <Box
      sx={{
        bg: "border-box",
        border: "1px #ffffff solid",
        // background: "linear-gradient(225deg, #f0f0f0, #cacaca)",
        boxShadow:
          "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
        height: "42vh",
        width: "53vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "26px",
        alignSelf: "center",
      }}
    >
    {/* <GreettingText /> */}
      {textDone ? (
        <Typography
        
          variant="h3"
          padding="1"
          sx={{ color: "#fff", fontWeight: 300 ,textShadow: "1px 1px 2px #545151, 0 0 .1em #9c9797, 0 0 0.1em black",}}
        >
          Next page coming soon...
        </Typography>
      ) : (
        <GreettingText />
      )}
    </Box>
        {/* <Typography
          variant="h1"
          padding="1"
          sx={{ color: "#fff", position: "absolute" }}
        >
          The SWE
        </Typography> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
