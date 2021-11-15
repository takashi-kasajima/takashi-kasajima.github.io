import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const contents = [
  "👶 Playing with my son",
  "🎵 Listening to music (R&B / funk)",
  "📕 Reading books",
  "🕺 Dance (pop locking)",
  "🏋️‍♂️ Going to the gym",
  "🤿 Scuba diving",
];

export const Others = () => {
  return (
    <Box>
      <Typography variant="h3">Others</Typography>
      <Box borderRadius="24px" width="200px" height="200px" overflow="hidden">
        <img
          src="/father.png"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box height="10px" />
      <Typography variant="subtitle1">Interests</Typography>
      <Box width={1} display="flex" flexWrap="wrap">
        {contents.map((content, i) => (
          <Box key={i} display="flex" flexShrink={0}>
            <Typography variant="body1">{content}</Typography>
            {i < contents.length - 1 && (
              <Box mx="4px">
                <Typography variant="body1">/</Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
