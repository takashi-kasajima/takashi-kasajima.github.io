import { Box, Typography } from "@mui/material";
import React from "react";

const items = [
  {title: 'Coding', description: 'Javascript(React.js/Riot.js) / HTML / CSS / Firebase / Next.js / Go / Swift / Java / Kotlin / Cordova / Capacitor'},
  {title: 'Language', description: 'Japanese / English(TOEIC Score: 930)'},
]

export const Skills = () => {
  return (
    <>
      <Typography variant="h3">Skills</Typography>
      <Box height="10px" />
      <Box>
        {
          items.map((item, i) => (
            <Box key={i} mb='16px'>
              <Typography variant='subtitle1'>{item.title}</Typography>
              <Box height='8px'/>
              <Typography variant='body1'>{item.description}</Typography>
            </Box>
          ))
        }
      </Box>
    </>
  );
};
