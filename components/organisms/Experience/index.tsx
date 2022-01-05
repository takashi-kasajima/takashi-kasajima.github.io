import { Box, Typography, useMediaQuery } from "@mui/material";
import { Colors } from "components/atoms";
import theme from "components/theme";
import React, { useMemo } from "react";

export interface ExperienceData {
  title: string;
  contents: ExperienceContent[];
}
export interface ExperienceContent {
  title: string;
  positions: PositionData[];
}

export interface PositionData {
  subtitle: string;
  date: string;
  description: string[];
  link?: LinkData;
}

export interface LinkData {
  title: string;
  url: string;
}

const items: { [key: string]: ExperienceData } = {
  work: {
    title: "Work Experience",
    contents: [
      {
        title: "Freelance",
        positions: [
          {
            subtitle: "Frontend developer",
            date: "10/2021 - ",
            description: [
              "Responsible for 4 projects of web application production at the same time. Currently working with React.js/Typescript/Next.js/Redux.",
              "With my passion for learning new things, I'm catching up on React and related technologies every day.",
            ],
          },
        ],
      },
      {
        title: "Rabee.Inc",
        positions: [
          {
            subtitle: "Frontend developer (full time)",
            date: "1/2020 - 10/2021",
            description: [
              "Responsible for implementing web services and mobile apps. Involved to 18 agile projects.",
              "Worked with Javascript library called Riot.js, and started working with React on my side project.",
              "Studied 100 hours a month outside of work hours, and was able to acquire the widest range of skills in the company. In addition to frontend skills, I've experienced Go/Swift/Java/Kotlin.",
              "Experienced task management and client facing as a leader of the front-end team, and accomplished 2month project a week earlier than the deadline.",
              "Created a culture of knowledge sharing by initiating regular meetings to share soft and hard skills.",
            ],
          },
          {
            subtitle: "Frontend developer (part time)",
            date: "9/2019 - 1/2020",
            description: [
              "Wanting to contribute to the creation of products that solve social issues, I decided to change my career to programming.",
              "Quit my job at the bank and started studying about 10 hours a day, including weekends. At this time, I had no programming experience.",
              "In the 3 months since I started learning about H1 tags on free learning sites, I've been able to implement 1 page within 1 day using HTML/CSS.",
              "A more detailed progress is described in this article below (in Japanese)",
            ],
            link: {
              title: "Looking back my first year as an engineer",
              url: "https://zenn.dev/kasaji/articles/look-back-first-year",
            },
          },
        ],
      },
      {
        title: "Mizhuho bank",
        positions: [
          {
            subtitle: "corporate sales",
            date: "4/2015 - 9/2019",
            description: [
              "Worked as corporate sales representative for 4.5 years",
              "Learned how to prioritize tasks, and communicate with stakeholders inside and outside the company",
            ],
          },
        ],
      },
    ],
  },
  education: {
    title: "Education",
    contents: [
      {
        title: "Keio University",
        positions: [
          {
            subtitle: "Bachelor, Department of Law",
            date: "4/2011 - 3/2015",
            description: ["Majored civil law"],
          },
        ],
      },
    ],
  },
};

export interface HistoryProps {
  variant: "work" | "education";
}

export const Experience = ({ variant }: HistoryProps) => {
  const item = useMemo(() => items[variant], []);
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box mb="32px">
      <Typography variant="h3">{item.title}</Typography>
      <Box height="10px" />
      <Box mb="24px">
        {item.contents.map((content, content_index) => (
          <Box key={content_index} mb="16px">
            <Box color={Colors.primary.dark}>
              <Typography variant="h4">{content.title}</Typography>
            </Box>
            {content.positions.map((position, position_index) => (
              <Box
                key={`${content_index}_${position_index}`}
                mb={position_index < content.positions.length - 1 ? "24px" : ""}
              >
                <Typography variant="subtitle1">{position.subtitle}</Typography>
                <Typography variant="subtitle2">{position.date}</Typography>
                <Box height="16px" />
                {position.description.map((description, description_index) => (
                  <Box
                    key={`${content_index}_${position_index}_${description_index}`}
                    mb="12px"
                  >
                    <Typography variant="body1">{description}</Typography>
                  </Box>
                ))}
                {position.link && (
                  <a
                    href={position.link.url}
                    style={{
                      color: Colors.primary.default,
                      textDecoration: "none",
                    }}
                    target="_blank"
                    rel="nofollow"
                  >
                    {position.link.title}
                  </a>
                )}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
