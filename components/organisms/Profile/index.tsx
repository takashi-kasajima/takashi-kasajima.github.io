import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Image from "next/image";
import theme from "components/theme";

export const Profile = () => {
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box
      width={1}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems={isUpSm ? "" : "center"}
    >
      <Box
        mr={isUpSm ? "" : "12px"}
        width={isUpSm ? "250px" : "300px"}
        height={isUpSm ? "250px" : "200px"}
        borderRadius="24px"
        overflow="hidden"
      >
        <Image
          src="/portrait.jpg"
          width={isUpSm ? "250px" : "300px"}
          height={isUpSm ? "250px" : "200px"}
          objectFit="cover"
          objectPosition={isUpSm ? "" : "50% 20%"}
        />
      </Box>
      <Box width={1} textAlign="left">
        <Typography variant="h4">Takashi Kasajima</Typography>
        <Typography variant="subtitle1">Frontend developer</Typography>
      </Box>
    </Box>
  );
};
