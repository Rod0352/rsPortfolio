import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GreettingText } from "./components/GreetingText";
import { SideBar } from "./components/SideBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

const theme = createTheme({
  palette: {
    primary: {
      main: "#343331",
    },
    secondary: {
      main: "#363636",
    },
    background: {
      default: "#343331",
    },
  },
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
});

function App() {
  const [textDone, setTextDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextDone(true);
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "primary.main",
          // height: "66vw",
          alignItems: "center",
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          padding: "2%",
        }}
      >
        {textDone ? (
          <BrowserRouter>
            <Box>
              <SideBar />
              <Routes>
                <Route index element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Box>
          </BrowserRouter>
        ) : (
          <GreettingText />
        )}
      </Box>
      {/* </Box> */}
    </ThemeProvider>
  );
}

export default App;
