import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { useEffect, useState } from "react";
import { set } from "lodash";

export default function ProjectList({
  itemData,
}: {
  itemData: {
    img: string;
    title: string;
    author: string;
    description: string;
  }[];
}) {
  const [display, setDisplay] = useState<string | boolean>("none");
  const [width, setWidth] = useState("30%");
  useEffect(() => {
    setTimeout(() => {
      setWidth("100%");
    }, 200);
    setTimeout(() => {
      setDisplay("block");
    }, 500);
  }, []);

  return (
    <ImageList
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "scroll",
        scrollSnapStop: "normal",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">My Past Works</ListSubheader>
      </ImageListItem>
      {itemData.map((item, index) => (
        <ImageListItem
          key={item.img}
          // sx={{ width: 248, height: 248, border: "1px solid #10ad30" }}
          sx={{
            margin: "1rem",
            border: "1px solid #10ad30",
            width: "100%",
            height: width,
            transition: "all 0.5s",
          }}
        >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{
              width: "100%",
              height: width,
              objectFit: "cover",
              transition: "all 0.5s",
            }}
          />
          {/* <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgb(11 187 17 / 30%)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          /> */}
          <Accordion
            sx={{
              border: "1px solid #10ad30",
              borderRadius: "0px",
              position: "absolute",
              background: "#0d7935b5",
              color: "white",
              width: width,
              transition: "all 0.5s",
            }}
          >
            <AccordionSummary
              expandIcon={<InfoIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  display: display as string,
                }}
              >
                {item.title}
              </Typography>
              {/* <Typography>{item.author}</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.description}</Typography>
            </AccordionDetails>
          </Accordion>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
