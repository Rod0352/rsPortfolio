import { Box } from "@mui/material";
import React from "react";
import ProjectList from "../components/SwipingView";

const appImage = require("../images/app.jpg");
const spImage = require("../images/support_portal.png");
const runBuddyImg = require("../images/runBuddy.png");
const gameboardImg = require("../images/gameboard.png");
const codeQuizImg = require("../images/codeQuiz.png");

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
    {
      img: runBuddyImg,
      title: "Run Buddy (Mock)",
      author: "Me",
      description:
        "A mock website for a fitness company. Built with HTML and CSS.",
    },
    {
      img: gameboardImg,
      title: "Ashanti Mobile",
      author: "Me",
      description:
        "My first mobile game built with xcode and cocs2d. It is a boardgame that allows 1 -4 players to play on online or on the same device.",
    },
    {
      img: codeQuizImg,
      title: "Code Quiz",
      author: "Me",
      description:
        "A timed quiz that tests your knowledge of javascript. Built with HTML, CSS, and Javascript.",
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
