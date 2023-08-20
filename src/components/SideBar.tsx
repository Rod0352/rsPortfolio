import { MailOutline, Menu, Person, School, Work } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();

  const icons = [
    { icon: <Person />, name: "About Me", route: "/" },
    { icon: <Work />, name: "Things I've Made", route: "/projects" },
    { icon: <MailOutline />, name: "Reach out!", route: "/contact" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        top: "0",
        width: "100%",
        justifyContent: "center",
        position: "fixed",
        zIndex: 7,
        backgroundColor: " #343331",
      }}
    >
      {icons.map((icon, index) => (
        <Tooltip title={icon.name} placement="right">
          <IconButton
            size={"large"}
            key={index}
            sx={{
              color: "#fff",
              borderRadius: "5px",
              boxShadow:
                "-1px -1px 3px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
              border: "1px #ffffff solid",
              fontSize: "6rem",
              margin: "1rem",
            }}
            onClick={() => navigate(icon.route)}
          >
            {icon.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};
