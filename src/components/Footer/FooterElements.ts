import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom'
import Background from "./images/background.png";
import Album from "./images/album.png";
import clawCursor from "./images/clawCursor.png";

export const FooterContainer = styled.footer`
background: url(${Background});
background-repeat: no-repeat;
background-position: bottom;
display: flex;
justify-content: center;
min-height: calc(100vh - 80px);
`

export const Grid = styled.div`
display: grid;
grid-template-columns: auto auto auto;
align-items: end;
margin-bottom: 20px;
gap: 50px;

@media screen and (max-width: 700px){
grid-template-columns: auto;
gap:0;
}
`

export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen adn (max-width: 820px) {
    flex-direction: column;
}
`
export const WebsiteRights = styled.small`
color: #44624a;
margin-bottom: 16px;
padding-top: 20px;
font-family: "Lato";
`
export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`
export const SpeechWrap = styled.div`
display: flex;
flex-direction: column;
padding-left: 20px;
gap:5px;
`
export const PhotoAlbum = styled(Link)`
border: none;
  background: URL(${Album});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 100%;
  min-width: 100px;
  padding: 0; 

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


export const MessageLink = styled(Link)`
color: #44624a;
font-family: Lato;
font-weight: 900;
padding-top: 10px;

&:hover {
    transition: all 0.2s ease-in-out;
    color: #c0cfb2;
    text-shadow: -1px -1px 0 #44624a, 1px -1px 0 #44624a, -1px 1px 0 #44624a, 1px 1px 0 #44624a;
}
`;
