import { Box, Typography, useMediaQuery } from "@mui/material";
import theme from "components/theme";
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export const TopViewContents = () => {
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
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
  );
};

export const TopView = () => {
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      {isUpSm ? (
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
          <TopViewContents />
        </ParallaxBanner>
      ) : (
        <Box position="relative">
          <Box
            position="absolute"
            top={0}
            left={0}
            bottom={0}
            right={0}
            width={1}
            height={1}
          >
            <img
              src="/portrait.jpg"
              alt="portrait"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <TopViewContents />
        </Box>
      )}
    </>
  );
};
