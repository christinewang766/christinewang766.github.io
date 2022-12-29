import styled from 'styled-components'
import Popup from 'reactjs-popup';
import SnailPot from "../images/snailPot.png";
import DogPot from "../images/dogPot.png";
import BunnyPot from "../images/bunnyPot.png";

import monet from "../images/monet.png";

export const AboutContainer = styled.div`
background: url(${monet});
background-repeat: no-repeat;
backgroundSize: fill;
background-position: center;

display: flex;
align-items: center;
justify-content: center;
color: #fff;


@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`

export const AboutWrapper = styled.div`
z-index: 1;
height: 860px;
max-width: 1100px;
`

export const TextWrapper = styled.div`
max-width: 540px;
background:	#f1ebe1;
align-items: center;
justify-content: center;
`

export const Heading = styled.h1`
padding: 20px;
padding-bottom: 0;
margin-bottom: 10px;
font-family:'Dantina';
font-weight: bold;
font-size: 30px;
color: #8ba888;
text-align: center;

@media screen and (max-width: 480px){
    font-size: 32px;
}
`

export const SubHead = styled.div`
padding: 20px;
padding-bottom: 0;
padding-top: 0px;
margin-bottom: 24px;
font-family:'Kano';
font-size: 20px;
color: #8ba888;
text-align: center;
}
`
export const AdjustBioContainer = styled.div`
background: #c0cfb2;
display: flex;
align-items: center;
justify-content: center;
color: #44624a;
`

export const AdjustBioWrap = styled.div`
height: 150px;
max-width: 1100px;
`
export const ABTitle = styled.h4`
font-family: Kano;
padding: 10px;
padding-bottom: 30;
text-align: center;
`
export const ABBtnWrap = styled.div`
height: 40px;
max-width: 1100px;
background: #000;
display: flex;
align-items: center;
justify-content: center;
`

export const Img = styled.img`
width: 130px;
height: 200px;
margin-top: 130px;
padding-top: 30px;
display: block;
margin-left: auto;
margin-right: auto;

@media screen and (max-width: 800px) {
    margin-top: 0;
}
`
export const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(241,235,225, 0.5);
  }

  &-arrow {
color: #44624a;
  stroke-width: 2px;
  stroke: #44624a;
  stroke-dasharray: 30px;
  stroke-dashoffset: -54px;
  }
  
  &-content {
  background: #f1ebe1;
  padding: 20px;
  width: 50%;
  border: 4px solid #44624a;
  font-family: "Kano";
  line-height: 1.5;
  }
`
export const ButtonLong = styled.button`
outline: none;
color: #fff;
font-weight: bold;
letter-spacing: 2px;
text-align: center;
margin: auto;
font-family: "Kano";
border: none;
display: block;
float: left;
background: URL(${SnailPot});
background-repeat: no-repeat;
background-size: 65px 65px;
background-position: center;
padding: 30px 20px; 
`
export const ButtonMedium = styled.button`
outline: none;
font-weight: bold;
color: #000;
letter-spacing: 2px;
text-align: center;
margin: auto;
font-family: "Kano";
border: none;
display: block;
float: left;
background: URL(${DogPot});
background-repeat: no-repeat;
background-size: 65px 65px;
background-position: center;
padding: 30px 20px; 
`
export const ButtonShort = styled.button`
outline: none;
color: #000;
font-weight: bold;
letter-spacing: 2px;
text-align: center;
margin: auto;
font-family: "Kano";
border: none;
display: block;
float: left;
background: URL(${BunnyPot});
background-repeat: no-repeat;
background-size: 65px 75px;
background-position: center;
padding: 30px 20px; 
`