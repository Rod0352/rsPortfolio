import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GreettingText } from "./display/GreetingText";
import { SideBar } from "./components/SideBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainWrapper } from "./display/MainWrapper";
import { AboutMe } from "./pages/AboutMe";
import { Education } from "./pages/Education";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { slowLetterReveal } from "./utils/staggeringText";
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
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: "#10ad30",
        },
      },
    },
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
  const [textDone, setTextDone] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTextDone(true);
    }, 300);
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
            boxShadow:
              "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
            height: textDone
              ? "85vh"
              : { xs: "20vh", sm: "30vh", md: "40vh", lg: "45vh", xl: "50vh" },
            transition: "all 0.5s ease",
            width: textDone
              ? "69vw"
              : { xs: "80vw", sm: "67vw", md: "40vw", lg: "52vw", xl: "56vw" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "26px",
            alignSelf: "center",
            overflow: "auto",
            flexDirection: "column",
          }}
        >
          {textDone ? (
            <>
              <BrowserRouter>
                <Routes>
                  <Route index element={<AboutMe />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <SideBar />
              </BrowserRouter>
            </>
          ) : (
            <GreettingText />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
