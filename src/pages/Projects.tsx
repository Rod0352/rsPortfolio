import { Box, Grid, Paper, styled } from "@mui/material";
import React from "react";
// import CardConstructor from "../components/ProjectFolder";

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
  link?: string;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#1A2027",
  ...theme.typography.body2,
  margin: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Projects = () => {
  const itemData: itemData[] = [
    {
      img: appImage,
      title: "Book Search Wiki",
      author: "Me",
      link: "testing testing test",
      description:
        "A React app that searches for books using the Google Books API",
    },
    {
      img: spImage,
      title: "Support Portal",
      author: "Me",
      link: "testing testing test",

      description:
        "IoT device support portal built with React and Material UI. Leverages aws to procide a serverless backend. App helps manage devices remmotely and provides developers with a way to debug devices remotely.",
    },
    {
      img: runBuddyImg,
      title: "Run Buddy (Mock)",
      author: "Me",
      link: "testing testing test",

      description:
        "A mock website for a fitness company. Built with HTML and CSS.",
    },
    {
      img: gameboardImg,
      title: "Ashanti Mobile",
      link: "testing testing test",

      author: "Me",
      description:
        "My first mobile game built with xcode and cocs2d. It is a boardgame that allows 1 -4 players to play on online or on the same device.",
    },
    {
      img: codeQuizImg,
      title: "Code Quiz",
      link: "testing testing test",

      author: "Me",
      description:
        "A timed quiz that tests your knowledge of javascript. Built with HTML, CSS, and Javascript.",
    },
  ];

  const minWidth = window.innerWidth / 1.5;

  return (
    //
    <Paper
      sx={{
        width: "70vw",
        height: "75vh",
        display: "flex",
        backgroundColor: "#1A2027",
        borderRadius: "1rem",
        boxShadow:
          "5px 5px 9px rgb(15 62 225 / 45%), 5px 5px 9px rgb(11 187 17 / 30%)",
      }}
    >
      <Box display={"flex"}>
        <Box
          sx={{
            width: "1rem",
            height: "1rem",
            backgroundColor: "#FF605C",
            borderRadius: "50%",
            margin: "0.5rem",
          }}
        />
        <Box
          sx={{
            width: "1rem",
            height: "1rem",
            backgroundColor: "#FFBD44",
            borderRadius: "50%",
            margin: "0.5rem",
          }}
        />
        <Box
          sx={{
            width: "1rem",
            height: "1rem",
            backgroundColor: "#00CA4E",
            borderRadius: "50%",
            margin: "0.5rem",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
          overflowX: "scroll",
        }}
      >
        {/* {itemData.map((item, index) => (
          <CardConstructor
            key={index}
            images={item.img}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))} */}
      </Box>
    </Paper>
  );
};
