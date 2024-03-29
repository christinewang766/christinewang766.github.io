import styled from 'styled-components'

export const SkillsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #8ba888;

@media screen and (max-width: 480px) {
    height: 1000px;
}

@media screen and (max-width: 768px) {
    height: 1400px; 
}
`
export const SkillsWrapper = styled.div`
max-width: 1000px;
display: grid;
grid-template-columns: auto auto auto;
align-items: center;

@media screen and (max-width: 1000px) {
    grid-template-columns: auto auto;
}

@media screen and (max-width: 768px) {
    grid-template-columns: auto;
    padding: 0 20px;
}
`
export const SkillsCard = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 30px;
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
}
`

export const Title = styled.h1`
font-size: 8rem;
color: #fff;
font-family: "Playfair Display";
margin-top: 20px;

@media screen and (max-width: 480px) {
    font-size: 2.5rem;
}
`
export const Category = styled.h2`
font-size: 1rem;
margin-top: 15px;
margin-bottom: 15px;  
font-family: "Dantina";
color: #fff;
letter-spacing: 2px;
font-weight: 1000;
`

export const Details = styled.p`
font-size: 1rem;
text-align: center;
font-family: "Lato";
color: #fff;
`