import { Box } from "@mui/system";
import React from "react";

export const MainWrapper = ({ children }: any, textDone: boolean) => {
  return (
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
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
