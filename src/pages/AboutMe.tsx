import {
  EmojiPeople,
  Person,
  PinDrop,
  SpeakerNotes,
  SportsSoccer,
  Watch,
  WorkOutline,
} from "@mui/icons-material";
import {
  AmazonwebservicesOriginal,
  ExpressOriginal,
  JavascriptOriginal,
  MaterialuiOriginal,
  NodejsOriginal,
  ReactOriginal,
  TypescriptOriginal,
} from "devicons-react";

import { Box, LinearProgress, List, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IconsList } from "../components/IconsList";
import { slowLetterReveal } from "../utils/staggeringText";

export const AboutMe = () => {
  const SkillsProgress = [
    {
      name: "Typescript",
      progress: 100,
      icon: <TypescriptOriginal />,
    },
    {
      name: "Javascript",
      progress: 100,
      icon: <JavascriptOriginal />,
    },
    { name: "React", progress: 95, icon: <ReactOriginal /> },
    { name: "Node", progress: 90, icon: <NodejsOriginal /> },
    { name: "Express", progress: 67, icon: <ExpressOriginal /> },
    { name: "Material UI", progress: 98, icon: <MaterialuiOriginal /> },
    { name: "AWS", progress: 70, icon: <AmazonwebservicesOriginal /> },
  ];
  const bio = {
    description: {
      title: "Stats",
      name: "Rodney Scott",
      jobTitle: "Full Stack Developer",
      age: 24,
      location: "Columbus, Ohio",
    },
    bio: {
      title: "Bio",
      aboutMe:
        "I am a Full Stack Developer with a passion for learning and creating. I have a background in being awesome and have a love for creating things via a keybaord. I bring with me a background in React, Node, Typesript, Material UI, and many more. I am always looking for new opportunities to learn and grow as a developer. If you like what you see, feel free to reach out to me via the contact page!  ",
      hobbies: ["Coding", "  Gaming", " Hiking", " Cooking"],
    },
    skills: {
      languages: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL", "NoSQL"],
      frameworks: [
        "React",
        "Node.js",
        "Express.js",
        "Material UI",
        "Bootstrap",
        "Handlebars",
        "jQuery",
        "Mongoose",
        "Sequelize",
        "MySQL",
        "MongoDB",
      ],
      personal: [
        "Team Player",
        " Problem Solver",
        " Quick Learner",
        " Hard Worker",
        " Adaptable",
      ],
      languagesSpoken: ["English", " German", " Spanish "],
    },
  };

  const [text, setText] = useState("");
  const [jobTitleText, setJobTitleText] = useState("");
  const [ageText, setAgeText] = useState("");
  const [locationText, setLocationText] = useState("");
  const [aboutMeText, setAboutMeText] = useState("");
  const [hobbiesText, setHobbiesText] = useState("");
  const [languagesText, setLanguagesText] = useState("");
  const [languagesSpokenText, setLanguagesSpokenText] = useState("");
  const [softSkillsText, setSoftSkillsText] = useState("");

  useEffect(() => {
    slowLetterReveal(bio.description.name, setText);
    slowLetterReveal(bio.description.jobTitle, setJobTitleText);
    slowLetterReveal(bio.description.age.toString(), setAgeText);
    slowLetterReveal(bio.description.location, setLocationText);
    slowLetterReveal(bio.bio.aboutMe, setAboutMeText, 7);
    slowLetterReveal(bio.bio.hobbies.toString(), setHobbiesText);
    slowLetterReveal(bio.skills.languages.toString(), setLanguagesText);
    slowLetterReveal(
      bio.skills.languagesSpoken.toString(),
      setLanguagesSpokenText
    );
    slowLetterReveal(bio.skills.personal.toString(), setSoftSkillsText, 20);
  }, [2000]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexFlow: {
            xs: "column nowrap",
            sm: "column nowrap",
            md: "row nowrap",
            lg: "row nowrap",
            xl: "row nowrap",
          },
          maxHeight: "100%",
          overflow: "auto",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            maxHeight: "400px",
            flex: 1,
            minWidth: { xs: 100, sm: 120, md: 160, lg: 200, xl: 240 },
            backgroundColor: "#fff",
            color: "#000",
            paddingRight: "1rem",
            padding: "1rem",
            margin: "1rem",
            display: "flex",
            transition: "all 0.5s ease",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            {bio.description.title}
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <IconsList
              icon={<Person />}
              primaryText="Name"
              secondaryText={text}
            />
            <IconsList
              icon={<WorkOutline />}
              primaryText="Job Title"
              secondaryText={jobTitleText}
            />
            <IconsList
              icon={<Watch />}
              primaryText="Age"
              secondaryText={ageText}
            />
            <IconsList
              icon={<PinDrop />}
              primaryText="Location"
              secondaryText={locationText}
            />
          </List>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            maxHeight: "400px",
            maxWidth: "55vh",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "secondary.main",
            border: "1px #1a5726 solid",
            boxShadow:
              "5px 5px 9px rgb(30 172 48 / 45%), 5px 5px 9px rgb(11 187 17 / 30%)",
            color: "#000",
            padding: "1rem",
            margin: "1rem",
            transition: "all 0.5s ease",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", color: "#fff", marginBottom: "1rem" }}
          >
            {bio.bio.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              overflow: "hidden",
              alignSelf: "center",
              color: "#fff",
            }}
          >
            {aboutMeText}
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            flex: 1,
            maxHeight: "400px",
            display: "flex",
            backgroundColor: "#fff",
            color: "#000",
            padding: "1rem",
            margin: "1rem",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Soft Skills & Hobbies
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <IconsList
              icon={<EmojiPeople />}
              primaryText="Soft Skills"
              secondaryText={softSkillsText}
            />
            <IconsList
              icon={<SportsSoccer />}
              primaryText="Hobbies"
              secondaryText={hobbiesText}
            />
            <IconsList
              icon={<SpeakerNotes />}
              primaryText="Languages Spoken"
              secondaryText={languagesSpokenText}
            />
          </List>
        </Paper>
      </Box>
      <Box
        sx={{
          marginTop: "2rem",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center", color: "white" }}>
          My Stack
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxHeight: "100%",
          }}
        >
          {SkillsProgress.map((skill, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                margin: "1rem",
                width: "15%",
                color: "#fff",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  textAlign: "right",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "98%",
                }}
              >
                {skill.name}
                <>{skill.icon}</>
              </Typography>
              <LinearProgress
                sx={{
                  width: "100%",
                  backgroundColor: "#fff",
                  height: ".4rem",
                  borderRadius: "50px",
                }}
                variant="determinate"
                color="success"
                value={skill.progress}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
