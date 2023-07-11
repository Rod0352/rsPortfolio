import { MailOutline, Menu, Person, School, Work } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();

  const sidebarIcons = [
    { icon: <Person />, name: "About Me", route: "/" },
    // { icon: <School />, name: "Education", route: "/education" },
    { icon: <Work />, name: "Work Experience", route: "/projects" },
    { icon: <MailOutline />, name: "Contact", route: "/contact" },
  ];
  return (
    <Box
      sx={{
        // height: "100vh",
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        top: "0",
        left: "0",
        zIndex: 100,
        // width: "100%",
      }}
    >
      {sidebarIcons.map((icon, index) => (
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
              // transform: "scale(1)",
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
