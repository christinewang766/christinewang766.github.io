import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import libraries from "./images/libraries.png";
import devtools from "./images/devtools.png";
import languages from "./images/languages.png";


import {
  SkillsContainer,
  SkillsWrapper,
  Title,
  SkillsCard,
  Category,
  Details,
} from "./SkillsElements";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const skillsData: { title: string; details: string; src: string }[] = [
    {
      title: "Languages",
      details: "TypeScript, JavaScript, SQL, Java, Python, HTML/CSS",
      src: languages,

    },
    {
      title: "Frameworks & Libraries",
      details: "React, Next.js, Node.js, Express, Redux, Tailwind CSS, styled-components",
      src: libraries,
    },
    {
      title: "Testing & Tools",
      details:
        "PostgreSQL, MySQL, REST APIs, Cypress, Mocha, JUnit, Git, Figma, Jira, pandas, scikit-learn",
      src: devtools,
    },
  ];

  return (
    <>
      <SkillsContainer id="skills">
        <Title data-aos="fade-up">Skills</Title>
        <SkillsWrapper>
          {skillsData.map((props, i) => {
            return (
              <SkillsCard key={i}>
                <img
                  data-aos="fade-up"
                  src={props.src}
                  style={{
                    height: "160px",
                    width: "auto",
                    maxWidth: "100%",
                    marginBottom: "10px",
                  }}
                  alt="skills"
                />
                <Category>{props.title}</Category>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "160px",
                  }}
                >
                  <Details>{props.details}</Details>
                </div>
              </SkillsCard>
            );
          })}
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
};

export default Skills;
