import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import Cheerio from "./cheerio.png";
import clawCursor from "./clawCursor.png";

const Button = styled.div`
   position: fixed; 
   right: 20px;
   bottom: 40px;
   height: 20px;
   z-index: 1;
   width: 75px;
   height: 55px;
   color:#fff;
   
   background: URL(${Cheerio});
   background-repeat: no-repeat;
   background-size: 75px 55px;
   background-position: center;

 &:hover {
     cursor: URL(${clawCursor}), auto;
     animation: ${keyframes`
       0% {
         transform: translateY(0);
       }
       100% {
         transform: translateY(-25px);
       }
     `} 0.3s ease-in-out infinite alternate;
   }
`

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <Button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        style={{ display: visible ? "inline" : "none" }}
      >
      </Button>
    </div>
  );
};

export default ScrollUpButton;
