import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const GreettingText = () => {
  const [text, setText] = useState("");
  const slowLetterReveal = (text: string) => {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        setText(text.slice(0, i + 1));
      }, 70 * i);
    }
  };

  useEffect(() => {
    const textArray = [
      "Hello World!",
      "My name is Rodney",
      "I am a software engineer",
      "Welcome to my life ...",
    ];
    for (let i = 0; i < textArray.length; i++) {
      setTimeout(() => {
        slowLetterReveal(textArray[i]);
      }, 2300 * i);
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
        variant="h3"
        padding="1"
        sx={{ color: "#fff", fontWeight: 300 ,textShadow: "1px 1px 2px #545151, 0 0 .1em #9c9797, 0 0 0.1em black",}}
      >
        {text}
      </Typography>
    </Box>
  );
};
