import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Background from "./images/background.png";


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
font-size: 14px;
color: 	#44624a;
font-family: "Lato";
text-align: center;
text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
`
