import { Box, FormControl, TextField, Typography } from "@mui/material";
import React from "react";

export const Contact = () => {
  return (
    <Box>
      <Typography variant="h3">Contact</Typography>
      <FormControl>
        <TextField id="name" label="Name" variant="standard" />
        <TextField id="email" label="Email" variant="standard" />
        <TextField id="message" label="Message" variant="standard" />
      </FormControl>
    </Box>
  );
};
