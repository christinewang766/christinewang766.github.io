import styled from 'styled-components'

export const AboutContainer = styled.div`
color: #fff;
background: #44624a;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
    height: 100%;
}
`

export const AboutWrapper = styled.div`
display: grid;
grid-template-columns: auto auto;
align-items: center;
justify-content: center;
padding-top: 100px;
padding-bottom: 100px;

@media screen and (max-width: 768px) {
    grid-template-columns: auto;
}
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 60px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: #f7f8fa;
font-family: "Playfair Display";

@media screen and (max-width: 480px){
    font-size: 32px; 
}
`
export const Description = styled.p`
max-width: 460px;
margin-bottom: 35px;
padding: 20px;
font-family: "Lato";
font-size: 22px;
line-height: 26px;
letter-spacing: 1px;
color: #fff;
`

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 600px) {
    max-width: 450px;
    margin-left: 10px;
}
@media screen and (max-width: 400px) {
    max-width: 450px;
    margin-left: 0;
}
`

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`