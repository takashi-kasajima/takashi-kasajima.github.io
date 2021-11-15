import { Email, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "components/atoms";
import React, { useMemo } from "react";

export const Footer = () => {
  const theme = useTheme();
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const socialMedia = useMemo(() => {
    return [
      {
        component: (
          <Email color="inherit" fontSize={isUpSm ? "medium" : "small"} />
        ),
        url: "mailto:kaserj1119@gmail.com",
      },
      {
        component: (
          <GitHub color="inherit" fontSize={isUpSm ? "medium" : "small"} />
        ),
        url: "https://github.com/takashi-kasajima",
      },
      {
        component: (
          <LinkedIn color="inherit" fontSize={isUpSm ? "medium" : "small"} />
        ),
        url: "https://www.linkedin.com/in/takashi-kasajima-aa97401b3/",
      },
      {
        component: (
          <Twitter color="inherit" fontSize={isUpSm ? "medium" : "small"} />
        ),
        url: "https://twitter.com/kasajirr",
      },
    ];
  }, [isUpSm]);

  return (
    <footer style={{ width: "100%" }}>
      <Box
        p="40px"
        display="flex"
        justifyContent={isUpSm ? "space-between" : "center"}
        alignItems="center"
        sx={{
          backgroundColor: Colors.primary.dark,
        }}
      >
        <Box display="flex" alignItems="center">
          {socialMedia.map((item, i) => (
            <Box key={i} mr={i < socialMedia.length - 1 ? "24px" : ""}>
              <a
                href={item.url}
                target="_blank"
                rel="nofollow"
                style={{
                  color: "white",
                }}
              >
                {item.component}
              </a>
            </Box>
          ))}
        </Box>
      </Box>
    </footer>
  );
};
