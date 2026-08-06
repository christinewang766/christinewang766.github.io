import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import pochita from "./images/pochita.png";
import closedLetter from "./images/closedLetter.png";
import clawCursor from "./images/clawCursor.png";
import openLetter from "./images/openLetter.png";
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  font-family: 'Lato';
  z-index: 999;
  background: url(${pochita});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
outline:none;
`

export const CloseIcon = styled(FaTimes)`
  color: #44624a;

  &:hover {
    cursor: url(${clawCursor}), auto;
  }
`;

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #44624a;

&:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
}
`

export const SidebarRoute = styled(LinkR)`
background: URL(${closedLetter});
background-repeat: no-repeat;
background-size: 140px 80px;
background-position: center;
padding: 70px 60px; 

&:hover {
    background: URL(${openLetter});
    background-repeat: no-repeat;
    background-size: 140px 100px;
    background-position: center;
}
`