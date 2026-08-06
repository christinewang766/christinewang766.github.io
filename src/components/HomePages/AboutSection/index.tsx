import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Profile from "../images/profile.png";


import {
  AboutContainer,
  AboutWrapper,
  TextWrapper,
  Heading,
  Description,
  ImgWrap,
  Img,
  Button,
  ChatLink
} from "./AboutElements";

const AboutSection = () => {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <TextWrapper>
            <Heading data-aos="fade-left" data-aos-easing="linear">
              "Hey, I'm Christine!"
            </Heading>
            <Description data-aos="fade-left" data-aos-easing="linear">
              Raised in the Lower Mainland and a proud UBC Computer Science graduate/survivor. Between whimsical side quests and chasing curiosities, I fell in love with bringing ideas to life through code, sweat, and sheer resilience against endless compiler errors. Interested in tech or nerding out? Feel free to <ChatLink href="/#/message">have a chat</ChatLink> ♡
            </Description>
            <Button to="/about-me">
              Want to<br></br>know more?
            </Button>
          </TextWrapper>
          <ImgWrap>
            <Img data-aos="fade-up" src={Profile} />
          </ImgWrap>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
