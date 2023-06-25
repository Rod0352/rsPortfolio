import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";

export const IconsList = ({
  icon,
  primaryText,
  secondaryText,
}: {
  icon: JSX.Element;
  primaryText: string;
  secondaryText: string;
}): JSX.Element => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{icon}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </ListItem>
  );
};
