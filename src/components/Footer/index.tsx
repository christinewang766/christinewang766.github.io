import React from "react";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import TurnipsImg from "./youFoundMe.png";

import {
  FooterContainer,
  FooterWrap,
  SocialIcons,
  SocialMediaWrap,
  WebsiteRights,
  PhotoAlbum,
  SpeechWrap,
  Grid,
} from "./FooterElements";

const Footer = () => {
  let turnipsString: string[] = ["You found me!", "I like going on...", "...adventures!"];

  function SingleSocialIcon(props: {
    ariaLabel: string;
    link: string;
    icon: IconType;
  }) {
    return (
      <a
        aria-label={props.ariaLabel}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "white", fontSize: "24px" }}
      >
        <props.icon style={{ pointerEvents: "none" }} />
      </a>
    );
  }

  function SpeechBubble(props: { speech: string }) {
    return (
      <div style={{ background: '#c0cfb2', borderRadius: '100px', display: 'flex', padding: '7px', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontSize: '14px', color: 'white', fontWeight: '600', fontFamily: 'Lato', textAlign: 'center' }}>{props.speech}</p>
      </div>
    )
  };

  return (
    <>
      <FooterContainer id="contact">
        <Grid>
          {/** WRAP: you found me */}
          <div style={{ display: "flex", marginTop: "40px" }}>
            {/** TURNIPS */}
            <img
              style={{ width: "150px", height: "82%" }}
              src={TurnipsImg}
              alt="turnips"
            />
            <SpeechWrap>
              <SpeechBubble speech={turnipsString[0]} />
              <SpeechBubble speech={turnipsString[1]} />
              <SpeechBubble speech={turnipsString[2]} />
              <PhotoAlbum to="/turnips">♡ Album ♡</PhotoAlbum>
            </SpeechWrap>
          </div>
          <FooterWrap>
            <SocialMediaWrap>
              <SocialIcons>
                <SingleSocialIcon
                  ariaLabel="Instagram"
                  link="https://www.instagram.com/christinewang766/"
                  icon={FaInstagram}
                />

                <SingleSocialIcon
                  ariaLabel="LinkedIn"
                  link="https://www.linkedin.com/in/christine-wang-b690a818a/"
                  icon={FaLinkedin}
                />

                <SingleSocialIcon
                  ariaLabel="Email"
                  link="mailto:christinewang766@gmail.com?subject = Feedback&body = Message"
                  icon={AiOutlineMail}
                />

                <SingleSocialIcon
                  ariaLabel="GitHub"
                  link="https://github.com/christinewang766"
                  icon={AiFillGithub}
                />
              </SocialIcons>
            </SocialMediaWrap>

            <Link style={{ color: 'white', fontFamily: 'Lato', paddingTop: '10px' }} to="/message">Message Me</Link>

            <WebsiteRights>
              Christine Wang © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
          </FooterWrap>
        </Grid>
      </FooterContainer>
    </>
  );
};

export default Footer;
