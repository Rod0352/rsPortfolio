import { MailOutline, Menu, Person, School, Work } from '@mui/icons-material';
import { Box, IconButton, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';

export const SideBar = () => {

    const sidebarIcons = [
        { icon: <Person/>, name: 'About Me' },
        {icon : <School/>, name: 'Education'},
        {icon: <Work />, name: 'Work Experience'},
       {icon : <MailOutline  />, name: 'Contact'}     
        ];
    return (
        <Box sx={{ height:"100vh", transform: 'translateZ(0px)', flexGrow: 1, position: "absolute",
        widows: { xs: "10vw", sm: "20vw", md: "27vw", lg: "35vw", xl: "39vw" }, display: 'flex',
         justifyContent: 'space-around', flexDirection: 'column', left:50, margin: "5% 0 5% 0"
        }}>
        {sidebarIcons.map((icon, index) => (
            <Tooltip title={icon.name} placement="right">
            <IconButton size={"large"} key={index} sx={{ color: "#fff",borderRadius:"5px",boxShadow:
          "-1px -1px 3px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
          border: "1px #ffffff solid", fontSize: "6rem",transform: "scale(2.0)"}}>
                {icon.icon}
            </IconButton>
            </Tooltip>
        ))}
      </Box>
    );
}


