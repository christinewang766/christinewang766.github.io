import styled, { keyframes } from "styled-components";
import Back from "./images/back.png";
import monet from "./images/monet.png";
import clawCursor from "./images/clawCursor.png";

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
  display: flex;
  flex-direction: column;
  }
`;


export const ProfileEducationWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BackButton = styled.button`
  outline: none;
  font-family: "Florentia";
  font-size: 25px;
  white-space: nowrap;
  font-weight: bold;
  letter-spacing: 5px;
  color: #44624a;
  transform: rotate(-90deg);

  border: none;
  background: URL(${Back});
  background-repeat: no-repeat;
  background-size: auto 60px;
  background-position: center;
  padding: 10px 15px;

  &:hover {
    cursor: URL(${clawCursor}), auto;
  }
`;
export const ButtonWrap = styled.div`
  width: 60px;
  height: 200px;
  background: #8ba888;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 400px) {
    width: 30px;
    height: 100px;
  }
`;
export const ResumeButtonWrap = styled.div`
  background: #8ba888;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-top: -10px;

   &:hover {
      cursor: URL(${clawCursor}), auto;
      animation: ${keyframes`
        0% { transform: scale(1); }
        30% { transform: scale(1.25, 0.75); }
        40% { transform: scale(0.75, 1.25); }
        50% { transform: scale(1.15, 0.85); }
        65% { transform: scale(0.95, 1.05); }
        75% { transform: scale(1.05, 0.95); }
        100% { transform: scale(1); }
      `} 0.6s ease-in-out;
    }


`;

export const TitleWrap = styled.div`
  width: 100px;
  height: 400px;
  background: #44624a;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  @media screen and (max-width: 400px) {
    width: 50px;
    height: 200px;
  }

  @media screen and (max-width: 540px) {
    width: 40px;
    padding: 6px;
  }
`;

export const Title = styled.h1`
  font-family: "Florentia";
  font-weight: bold;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-orientation: sideways;
  letter-spacing: 5px;
  color: #fff;

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
  @media screen and (max-width: 540px) {
    font-size: 25px;
  }
`;

export const AboutContainer = styled.div`
  background: url(${monet});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  height: 100%;
`;

export const TextWrapper = styled.div`
  background: #f1ebe1;
  justify-content: center;
      height: fit-content;

  @media screen and (max-width: 540px) {
    width: 250px;
  }
`;

export const Heading = styled.h1`
  padding: 20px;
  padding-bottom: 10px;
  font-family: "Dantina";
  font-weight: bold;
  font-size: 30px;
  color: #8ba888;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media screen and (max-width: 400px) {
    font-size: 25px;
  }
`;

export const SubHead = styled.div`
padding: 20px;
padding-bottom: 24px;
padding-top: 0px;
font-family:'Lato';
font-size: 20px;
color: #8ba888;
text-align: center;
}
`;
export const AdjustBioContainer = styled.div`
  background: #c0cfb2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #44624a;
  height:fit-content;
  max-width: 100vw;
`;

export const ABBtnWrap = styled.div`
  height: 40px;
  max-width: 1100px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  padding: 20px;
  padding-bottom: 0;
`;

export const Img = styled.img`
  width: 125px;
  height: auto;
  display: block;
  box-shadow: 10px 10px #c0cfb2;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    cursor: URL(${clawCursor}), auto;
  }
`;

export const PotButton = styled.button`
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  font-family: "Lato";
  border: none;
  display: block;
  float: left;
  background: none;
  background-repeat: no-repeat;
  background-size: 65px 65px;
  background-position: center;
  padding: 30px 20px;

  &:hover {
    cursor: URL(${clawCursor}), auto;
  }

  @media screen and (max-width: 540px) {
    background-size: 55px 55px;
  }

  @media screen and (max-width: 400px) {
    background-size: 50px 50px;
  }
`;

export const EducationWrap = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f1ebe1;

  @media screen and (max-width: 540px) {
    width: 250px;
  }
`;

export const Education = styled.h2`
  font-family: "Lato";
  font-weight: bold;
  letter-spacing: 3px;
  color: #44624a;
  padding-bottom: 10px;
`;
export const EducationDate = styled.p`
  font-family: "Florentia";
  font-size: 15px;
  letter-spacing: 3px;
  font-style: italic;
  color: #8ba888;
  padding-bottom: 10px;
`;

export const EducationDetails = styled.h4`
  font-family: "Lato";
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  color: #44624a;
`;

export const Link = styled.a`
  background: none;
  border: none;
  color: white;
  font-family: Lato;
  font-size: 18px;
  font-weight: 600;
  padding: 5px;
  letter-spacing: 1px;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    cursor: URL(${clawCursor}), auto;
  }
`;

export const BioParagraph = styled.p`
  color: #44624a;
  font-family: Lato;
  font-size: 15px;
  max-width: 600px;
  letter-spacing: 1px;
  padding: 15px;
  white-space: pre-wrap; 
`;