import { Box, Grid, Paper, styled } from "@mui/material";
import React from "react";
import CardConstructor from "../components/InfoCards";

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

  return (
    <Grid
      container
      direction="row"
      maxHeight={"87vh"}
      spacing={1}
      padding={5}
      item
      display={"flex"}
      justifyContent={"space-around"}
    >
      {itemData.map((item, index) => (
        <Item key={index}>
          {CardConstructor({
            images: item.img,
            title: item.title,
            description: item.description,
            link: item.link,
          })}
        </Item>
      ))}
    </Grid>
  );
};
