import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ProjectData } from "./ProjectsData";

import {
  ProjectsContainer,
  ProjectsWrapper,
  Header,
  Title,
  Description,
  DescriptionWrap,
  ReadMore,
  ImgWrap,
} from "./ProjectsElements";
import ScrollToTop from "../../ScrollToTop";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  interface CreateMapProps {
    id: string;
    title: string;
    details: string;
    gif: string;
    hoverGif: string;
  }

  function MappedProject({
    id, title, details, gif, hoverGif
  }: CreateMapProps) {
    const [hover, setHover] = useState(false);

    return (
      <div
        id={id}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        data-aos="fade-up"
        key={title}
      >
        <ImgWrap
          style={{
            backgroundImage: hover
              ? hoverGif
              : gif,
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <DescriptionWrap>
            <Description>{details}</Description>
            <ReadMore to="/projects">Read More</ReadMore>
          </DescriptionWrap>
        </ImgWrap>
        <Title to="/projects">{title}</Title>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <ProjectsContainer id="projects">
        <Header data-aos="fade-up">Projects</Header>
        <ProjectsWrapper>
          {ProjectData.map((proj, i) => {
            return (
              <MappedProject
                id={proj.id}
                title={proj.title}
                details={proj.details}
                gif={proj.gif}
                hoverGif={proj.hoverGif}
                key={i}
              />
            );
          })}
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
