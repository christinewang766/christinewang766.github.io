import React from "react";
import {
  Container,
  ButtonWrap,
  BackButton,
  FrameWrap,
  HeaderWrap,
  Hearts,
  Hearts2,
  Header,
  ProjectTitle,
  GridWrap,
  TextBoxWrap,
  TextWrap,
  GitLink,
  Topic,
  Description,
  ListItem,
  DemoWrap,
  VidWrap,
  PostImg,
} from "./ProjectsElements";
import ScrollToTop from "../../components/ScrollToTop";
import { useNavigate } from "react-router-dom";
import { ProjectData } from "./ProjectData";

const Projects = () => {
  let navigate = useNavigate();

  function VidOrImg(props: {
    img?: string;
    video?: string;
    videoText?: string;
  }) {
    if (props.video === undefined) {
      return (
        <VidWrap>
          <PostImg style={{ backgroundImage: "url(" + props.img + ")" }} />
        </VidWrap>
      );
    } else if (props.videoText === undefined) {
      return (
        <VidWrap>
          <video
            style={{ width: "100%" }}
            controls
            preload="metadata"
            src={props.video}
          ></video>
        </VidWrap>
      );
    } else {
      return (
        <VidWrap>
          <video
            style={{ width: "100%" }}
            controls
            preload="metadata"
            src={props.video}
          ></video>
          <div
            style={{
              padding: "10px",
              background: "white",
              fontFamily: "Lato",
              fontWeight: "600",
            }}
          >
            {props.videoText}
          </div>
        </VidWrap>
      );
    }
  }

  return (
    <>
      <ScrollToTop />
      <Container>
        <FrameWrap>
          <HeaderWrap>
            <ButtonWrap>
              <BackButton onClick={() => navigate(-1)}>GO BACK</BackButton>
            </ButtonWrap>
            <Header>Projects</Header>
          </HeaderWrap>

          {ProjectData.map((props, i) => {
            return (
              <GridWrap key={i} id={props.id}>
                <TextBoxWrap>
                  <Hearts />
                  <TextWrap>
                    <ProjectTitle>{props.title}</ProjectTitle>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Topic>Topic:</Topic>
                      <GitLink href={props.repo} target="_blank">
                        repository
                      </GitLink>
                    </div>
                    <Topic>Language(s): {props.languages}</Topic>
                    <Topic>Status: {props.status}</Topic>
                    <Description>
                      <ListItem>{props.l1}</ListItem>
                      <ListItem>
                        {props.l2}&nbsp;
                        <a target="_blank" href={props.extraMedia}>
                          {props.extraMediaDesc}
                        </a>
                      </ListItem>
                      <ListItem>{props.l3}</ListItem>
                    </Description>
                  </TextWrap>
                </TextBoxWrap>
                <DemoWrap>{VidOrImg(props)}</DemoWrap>
                <Hearts2 />
              </GridWrap>
            );
          })}
        </FrameWrap>
      </Container>
    </>
  );
};

export default Projects;
