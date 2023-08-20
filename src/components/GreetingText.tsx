import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { slowLetterReveal } from "../utils/staggeringText";
export const GreettingText = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const textArray = [
      "Hello World!",
      "My name is Rodney",
      "I am a Full Stack Developer",
      "Welcome...",
      "npm run start",
    ];
    for (let i = 0; i < textArray.length; i++) {
      setTimeout(() => {
        slowLetterReveal(textArray[i], setText, 50);
      }, 1900 * i);
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Typography
        variant={window.innerWidth > 600 ? "h3" : "h6"}
        padding="1"
        sx={{
          color: "#fff",
          fontWeight: 300,
          textShadow: "1px 1px 2px #545151, 0 0 .1em #9c9797, 0 0 0.1em black",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
