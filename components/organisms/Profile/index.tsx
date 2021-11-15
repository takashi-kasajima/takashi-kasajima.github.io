import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import theme from "components/theme";

export const Profile = () => {
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Box width="250px" height="250px" borderRadius="24px" overflow="hidden">
        <img
          src="/portrait.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Typography variant="h4">Takashi Kasajima</Typography>
      <Typography variant="subtitle1">Frontend developer</Typography>
    </>
  );
};
