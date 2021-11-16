import Head from "next/head";
import theme from "../components/theme";
import React from "react";
import { ThemeProvider, Box, useMediaQuery } from "@mui/material";
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
          <link rel="shortcut icon" type='image/x-icon' href="/favicon.ico" />
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
              justifyContent="space-between"
            >
              {isUpSm && (
                <Box
                  flexShrink={0}
                  height="100%"
                  position="sticky"
                  top={60}
                  mr="48px"
                >
                  <Profile />
                </Box>
              )}
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
