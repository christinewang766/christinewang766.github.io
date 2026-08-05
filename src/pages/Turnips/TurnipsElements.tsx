import styled from "styled-components";
import Resize from "./images/resize_window.png";
import ArrowImg from "./images/arrow.png";
import Window from "./images/window.JPG";
import Heart from "./images/heart.jpg";
import Mask from "./images/mask.JPG";
import HandHold from "./images/handHold.jpg";
import Vaccum from "./images/vaccum.PNG";
import CarpetFall from "./images/carpetFall.JPG";
import Sleep from "./images/sleep.JPG";
import PokeReveal1 from "./images/pokeReveal1.PNG";
import PokeReveal2 from "./images/pokeReveal2.PNG";
import NoNose from "./images/noNose.JPG";
import China from "./images/china.jpg";
import BenchFall from "./images/benchFall.jpg";
import Swing from "./images/swing.jpg";
import Flower1 from "./images/flower1.jpg";
import Flower2 from "./images/flower2.jpg";
import FlowerTofuTurnip from "./images/flowerTofuTurnip.jpg";
import Fly from "./images/fly.jpg";
import DitchFall from "./images/ditchFall.jpg";
import China2 from "./images/china2.jpg";
import Basketball from "./images/basketball.jpg";
import Jail from "./images/jail.jpg";
import SadBench from "./images/sadBench.jpg";
import Mushroom from "./images/mushroom.JPG";
import Tree1 from "./images/tree1.JPG";
import Tree2 from "./images/tree2.JPG";
import Tree3 from "./images/tree3.JPG";
import Bench from "./images/bench.JPG";
import Box from "./images/box.JPG";
import Final from "./images/final.png";
import Collage from "./images/collage.png";
import clawCursor from "./images/clawCursor.png";
import Back from "./images/back.png";


export const InitBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f1ebe1;
`;

export const BackButton = styled.button`
  outline: none;
  font-family: "Florentia";
  font-size: 25px;
  white-space: nowrap;
  font-weight: bold;
  letter-spacing: 5px;
  color: #44624a;

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
  width: 200px;
  height: 60px;
  background: #8ba888;
  position: absolute;
  top: 20px;
  left: 20px;
  box-shadow: 20px 10px #f1ebe1;

  @media screen and (max-width: 400px) {
    width: 30px;
    height: 100px;
    box-shadow: none;
    background: none;
  }
`;

export const ResizeImg = styled.img.attrs({
  src: Resize,
  alt: 'Drag and resize the corner of your browser window for a surprise :D'
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: auto;

  @media screen and (max-width: 1300px) {
    display: none; 
  }
`;

export const Arrow = styled.img.attrs({
  src: ArrowImg,
  alt: 'Arrow pointing at the corner of the screen'
})`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 250px;
  height: auto;

  @media screen and (max-width: 1300px) {
    display: none; 
  }
`;

export const Img = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  @media screen and (max-width: 1300px) {
    background: URL(${PokeReveal1});
    background-size: cover;
  }
  @media screen and (max-width: 1250px) {
    background: URL(${PokeReveal2});
    background-size: cover;
  }
  @media screen and (max-width: 1225px) {
    background: URL(${Tree3});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 1200px) {
    background: URL(${China});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 1175px) {
    background: URL(${BenchFall});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 1150px) {
    background: URL(${Basketball});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 1125px) {
    background: URL(${Box});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 1100px) {
    background: URL(${DitchFall});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 1075px) {
    background: URL(${Fly});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 1050px) {
    background: URL(${Flower1});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 1025px) {
    background: URL(${Bench});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 1000px) {
    background: URL(${Tree2});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 975px) {
    background: URL(${Swing});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 950px) {
    background: URL(${Jail});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 925px) {
    background: URL(${Flower2});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 900px) {
    background: URL(${Tree2});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 875px) {
    background: URL(${Window});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 850px) {
    background: URL(${Heart});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 825px) {
    background: URL(${China2});
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 800px) {
    background: URL(${SadBench});
    height: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 775px) {
    background: URL(${Mushroom});
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 750px) {
    background: URL(${Tree1});
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 725px) {
    background: URL(${FlowerTofuTurnip});
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  @media screen and (max-width: 700px) {
    background: URL(${Vaccum});
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 675px) {
    background: URL(${HandHold});
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 650px) {
    background: URL(${CarpetFall});
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  @media screen and (max-width: 625px) {
    background: URL(${Sleep});
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  @media screen and (max-width: 600px) {
    background: URL(${NoNose});
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 575px) {
    background: URL(${Mask});
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media screen and (max-width: 550px) {
    background: URL(${Final});
    background-repeat: no-repeat;
    top: 20%;
    bottom: 20%;
    background-size: 100% auto;
  }
  @media screen and (max-width: 475px) {
    top: 0;
    bottom: 0;
    background: URL(${Collage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;
