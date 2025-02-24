import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ProjectsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #f1ebe1;
width: 100%;
height: auto;

@media screen and (max-width: 480px) {
    height: 1000px;
}

@media screen and (max-width: 1000px) {
    height: auto; 
    padding-bottom: 10%;
}
`
export const ProjectsWrapper = styled.div`
max-width: 1000px;
display: grid;
grid-template-columns: auto auto;
align-items: center;
justify-content: center;
gap: 120px;
height: 100%;
padding-bottom: 50px;

@media screen and (max-width: 1000px) {
    grid-template-columns: auto;
    padding: 0 20px;
}
`
export const ImgWrap = styled.div`
background-repeat: no-repeat;
background-size: 100%;
background-position: center;
transition: all 0.2s ease-in-out;
width: 400px;
height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

&:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
}
@media screen and (max-width: 480px) {
    width: 300px;
    height: 300px;
}
`
export const Header = styled.h1`
font-size: 8rem;
color: #8ba888;
font-family: "Playfair Display";
padding: 30px;
margin-top: -20px;
@media screen and (max-width: 500px) {
    font-size: 4.5rem;
}
`

export const Title = styled(Link)`
font-size: 1.5rem;
font-family: "Lato";
color: #44624a;
font-weight: 2000;
letter-spacing: 2px;
`
export const DescriptionWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

max-width:100%;
height: 100%;
opacity: 0;

&:hover{
    opacity: 1;
}
`
export const Description = styled.p`
font-size: 1.2rem;
text-align: center;
font-family: "Lato";
font-weight: 1000;
letter-spacing: 1px;
color: #fff;
padding-top: 20px;
padding-left: 50px;
padding-right: 50px;
padding-bottom: 20px;

@media screen and (max-width: 480px) {
    padding-bottom: 6px;
}
`
export const ReadMore = styled(Link)`
border-radius: 50px;
background: #c0cfb2;
white-space: nowrap;
padding: 10px 22px;
color: #fff;
font-size: 16px;
font-weight: bold;
letter-spacing: 2px;
font-family: "Lato";
outline: none;
border: none;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background #f1ebe1;
    color: #010606;
}

@media screen and (max-width: 480px) {
    padding: 5px 10px;
    font-size: 14px;
}
`