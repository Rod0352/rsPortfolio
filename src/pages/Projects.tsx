import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectList from "../components/SwipingView";
// import appImage from "../images/app.jpg";
const appImage = require("../images/app.jpg");
const spImage = require("../images/support_portal.png");

interface itemData {
  img: string;
  title: string;
  author: string;
  description: string;
}
export const Projects = () => {
  const itemData: itemData[] = [
    {
      img: appImage,
      title: "Book Search Wiki",
      author: "Me",
      description:
        "A React app that searches for books using the Google Books API",
    },
    {
      img: spImage,
      title: "Support Portal",
      author: "Me",
      description:
        "IoT device support portal built with React and Material UI. Leverages aws to procide a serverless backend. App helps manage devices remmotely and provides developers with a way to debug devices remotely.",
    },
  ];

  return (
    <Box
      sx={{
        padding: "2rem",
        height: "100%",
      }}
    >
      <ProjectList itemData={itemData} />;
    </Box>
  );
};
