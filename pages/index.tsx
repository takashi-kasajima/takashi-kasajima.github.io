import Head from "next/head";
import theme from "../components/theme";
import React from "react";
import { ThemeProvider, Box, Typography, useMediaQuery } from "@mui/material";
import { ParallaxProvider } from "react-scroll-parallax";
import {
  Experience,
  Footer,
  Others,
  Profile,
  Skills,
  TopView,
} from "components/organisms";

export default function Home() {
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Head>
          <title>Takashi Kasajima</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cuprum:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <style jsx global>
          {`
            body {
              margin: 0;
            }
          `}
        </style>

        <main
          style={{
            margin: 0,
            backgroundColor: "rgb(245, 241, 232)",
          }}
        >
          <TopView />
          <Box px="30px" py={isUpSm ? "60px" : "30px"}>
            <Box
              position="relative"
              width="100%"
              maxWidth="1000px"
              margin="0 auto"
              display="flex"
              justifyContent={isUpSm ? "space-between" : "flex-start"}
              flexDirection={isUpSm ? "row" : "column"}
            >
              <Box
                flexShrink={0}
                height="100%"
                position={isUpSm ? "sticky" : "static"}
                top={60}
                mr={isUpSm ? "48px" : ""}
                mb={isUpSm ? "" : "32px"}
              >
                <Profile />
              </Box>
              <Box>
                <Experience variant="work" />
                <Experience variant="education" />
                <Skills />
                <Others />
              </Box>
            </Box>
          </Box>
          <Footer />
        </main>
      </ParallaxProvider>
    </ThemeProvider>
  );
}
