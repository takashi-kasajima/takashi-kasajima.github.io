import { Box, Typography, useMediaQuery } from "@mui/material";
import theme from "components/theme";
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export const TopView = () => {
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <ParallaxBanner
      layers={[
        {
          image: "/background.png",
          amount: 0.5,
        },
      ]}
      style={{
        minWidth: "100vw",
        height: "100%",
        minHeight: isUpSm ? "600px" : "500px",
      }}
    >
      <Box
        position="relative"
        width="100%"
        height="100%"
        minHeight={isUpSm ? "600px" : "500px"}
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        textAlign="center"
        sx={{ background: "rgba(0, 0, 0, 0.2)" }}
      >
        <Typography variant="h4">Hi, I'm</Typography>
        <Box height="24px" />
        <Typography variant="h1">Takashi Kasajima</Typography>
      </Box>
    </ParallaxBanner>
  );
};
