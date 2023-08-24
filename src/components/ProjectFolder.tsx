import React from "react";
import { Box } from "@mui/material";

const FolderPaper = () => {
  return <Box></Box>;
};

const Folder = (props: any) => {
  return (
    <Box
      sx={{
        position: "relative",
        margin: " 0 auto 0 auto",
        padding: " 20px",
        width: "250px",
        height: "180px",
        backgroundColor: "#E6E68A",
        borderRadius: "0 10px 0 0",
        webkitTransition: "all 1s" /* Safari */,
        transition: "all 1s",

        ":before": {
          position: "absolute",
          left: 0,
          top: "-20px",
          height: "20px",
          backgroundColor: "#E6E68A",
          borderRadius: "10px 10px 0 0",
          width: "50px",
          content: "",
        },

        ":after": {
          backgroundColor: "#FFFF99",
          width: "100%",
          height: "170px",
          borderRadius: "10px 10px 0 0",
          transform: "skewX(10deg)",
          webkitTransform: " skewX(10deg)",
          animation: "open 5s infinite",
          webkitAnimation: "open 5s infinite",
          position: "absolute",
          bottom: 0,
          left: "-15px",
          content: "",
        },
        ":hover:after ": {},
      }}
    ></Box>
  );
};
