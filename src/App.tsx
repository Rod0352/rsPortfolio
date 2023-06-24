import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GreettingText } from "./display/GreetingText";
import  {SideBar } from "./components/SideBar";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
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
        height: textDone ?  "85vh" :{ xs: "20vh", sm: "30vh", md: "40vh", lg: "45vh", xl: "50vh"} ,
        transition: "all 0.5s ease",
        width: textDone ? "69vw" :{ xs: "80vw", sm: "67vw", md: "40vw", lg: "52vw", xl: "56vw"},
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "26px",
        alignSelf: "center",
      }}
    >
      {textDone ? (
        <>
        <Typography
        
          variant= {window.innerWidth > 600 ? "h3" : "h5"}
          padding="1"
          sx={{ color: "#fff", fontWeight: 300 ,textShadow: "1px 1px 2px #545151, 0 0 .1em #9c9797, 0 0 0.1em black",}}
        >
          Next page coming soon...
        </Typography>
        <SideBar/>
        </>
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
