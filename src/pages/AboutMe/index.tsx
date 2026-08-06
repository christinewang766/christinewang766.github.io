import React, { useState } from "react";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import Confetti from "react-confetti";
import Collapsible from "./Biography";
import Profile from "./images/mePic.jpg";
import Meow from "./images/meow.mp3";
import UBC from "./images/ubc.png";

import {
  ResponsiveContainer,
  ProfileEducationWrap,
  BackButton,
  ButtonWrap,
  TitleWrap,
  Title,
  ImgWrap,
  AboutContainer,
  TextWrapper,
  Heading,
  SubHead,
  Img,
  Education,
  EducationDate,
  EducationDetails,
  EducationWrap,
  ResumeButtonWrap,
  Link,
} from "./AboutMeElements";

const AboutMe = () => {
  const [playSound, setPlaySound] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [width, setWidth] = useState(window.innerWidth - 20);
  const [height, setHeight] = useState(window.innerHeight);
  let navigate = useNavigate();

  function handleResize() {
    setWidth(window.innerWidth - 20);
    setHeight(window.innerHeight);
  }
  window.addEventListener("resize", handleResize);

  return (
    <>
      {playSound ? <audio src={Meow} autoPlay loop /> : null}
      <Confetti width={width} height={height} opacity={opacity} />
      <ScrollToTop />
      <AboutContainer>
        <ResponsiveContainer>
          <ProfileEducationWrap>
            <ButtonWrap>
              <BackButton onClick={() => navigate(-1)}>GO BACK</BackButton>
            </ButtonWrap>
            <TitleWrap>
              <Title>ABOUT ME</Title>
            </TitleWrap>
            <div style={{ display: 'inline-flex' }}>
              <TextWrapper>
                <ImgWrap>
                  <button
                    style={{ border: "none" }}
                    onClick={() => {
                      setPlaySound(!playSound);
                      if (opacity === 1) {
                        setOpacity(0);
                      } else {
                        setOpacity(1);
                      }
                    }}
                  >
                    <Img src={Profile} />
                  </button>
                </ImgWrap>
                <Heading>"I'm Christine."</Heading>
                <SubHead>
                  <i>she/(any pronouns, really)</i>
                </SubHead>

                <ResumeButtonWrap>
                  <Link href="/Christine_Wang_2_pg_Resume.pdf" target="_blank" rel="noreferrer">
                    resume
                  </Link>
                </ResumeButtonWrap>
                <EducationWrap>
                  <Education>EDUCATION</Education>
                  <EducationDate>
                    <b>2021-2026</b>
                  </EducationDate>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img style={{ maxWidth: "15%" }} src={UBC} alt="ubc logo" />
                  </div>
                  <EducationDetails>
                    University of British Columbia<br></br>BSc majoring in Computer
                    Science
                  </EducationDetails>
                </EducationWrap>
              </TextWrapper>
            </div>
          </ProfileEducationWrap>

          <Collapsible />
        </ResponsiveContainer>
      </AboutContainer >
    </>
  );
};

export default AboutMe;
