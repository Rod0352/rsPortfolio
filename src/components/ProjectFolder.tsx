import React from "react";
import { Box } from "@mui/material";

const FolderPaper = ({
  title,
  description,
  link,
  img,
}: {
  title: string;
  description: string;
  link: string;
  img: string;
}) => {
  return (
    <Box
      sx={{
        position: " absolute",
        backgroundColor: "white",
        width: "230px",
        height: "180px",
        left: "10px",
        webkitTransition: " all 0.2s" /* Safari */,
        transition: "all 0.2s",
        animation: " show 5s infinite",
        webkitanimation: " show 5s ",
        boxShadow: " 0 1px 2px rgba(0,0,0,0.15)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "80px",
          left: "60px",
          // width: "10px",
          // height: "10px",
          // backgroundColor: "#FF605C",
          // borderRadius: "50%",
        }}
      />
      <img
        src={img}
        alt="project"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          // borderRadius: "10px",
        }}
      />
    </Box>
  );
};

const Folder = ({
  title,
  description,
  link,
  img,
}: {
  title?: string;
  description?: string;
  link?: string;
  img?: string;
}) => {
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

        // ":before": {
        //   position: "absolute",
        //   left: 0,
        //   top: "-20px",
        //   height: "20px",
        //   backgroundColor: "#E6E68A",
        //   borderRadius: "10px 10px 0 0",
        //   width: "50px",
        //   content: '"',
        // },

        // ":after": {
        //   backgroundColor: "#FFFF99",
        //   width: "100%",
        //   height: "170px",
        //   borderRadius: "10px 10px 0 0",
        //   transform: "skewX(10deg)",
        //   webkitTransform: " skewX(10deg)",
        //   animation: "open 5s",
        //   webkitAnimation: "open 5s ",
        //   position: "absolute",
        //   bottom: 0,
        //   left: "-15px",
        //   content: '""',
        // },
        // ":hover :after ": {
        //   transform: "skewX(20deg)",
        //   webkitTransform: "skewX(20deg)",
        //   left: "-30px",
        //   height: "150px",
        // },

        // "@keyframes open": {
        //   "50% ": {
        //     transform: "skewX(20deg)",
        //     left: "-30px",
        //     height: "150px",
        //   },
        // },

        // " @keyframes show ": {
        //   "50% ": {
        //     top: "-40px",
        //   },
        // },

        // "@-webkit-keyframes open": {
        //   "50% ": {
        //     webkitTransform: "skewX(20deg)",
        //     left: "-30px",
        //     height: "150px",
        //   },
        // },

        // "@-webkit-keyframes show": {
        //   "50% ": {
        //     top: " -40px",
        //   },
        // },
      }}
    >
      <FolderPaper
        title={title}
        description={description}
        link={link}
        img={img}
      />
    </Box>
  );
};

export default Folder;
