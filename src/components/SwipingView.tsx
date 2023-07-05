import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import InfoIcon from "@mui/icons-material/Info";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { useEffect, useState } from "react";

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
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setWidth("100%");
    }, 200);
    setTimeout(() => {
      setDisplay("block");
      setOpacity(1);
    }, 500);
  }, []);

  return (
    <ImageList
      sx={{
        display: "flex !important",
        flexWrap: "wrap !important",
        flexDirection: "row !important",
        justifyContent: "space-around",
      }}
    >
      {itemData.map((item, index) => (
        <ImageListItem
          key={item.img}
          sx={{
            margin: "1rem",
            border: "1px solid #10ad30",
            width: "100%",
            height: width,
            transition: "all 0.5s",
            maxHeight: "15rem",
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
              opacity: opacity,
              transition: "all 0.8s",
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
              // border: "1px solid #10ad30",
              borderRadius: "0px",
              position: "absolute",
              background: "#118b3ede",
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
