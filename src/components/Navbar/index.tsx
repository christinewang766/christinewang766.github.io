import React, { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import aboutSound from "./images/hello.mp3";

const Navbar = (props: { toggle: () => void }) => {

  const handleSetActive = (to: string) => {
    if (to === "contact") {
      const audio = new Audio(aboutSound);

      audio.play().catch((err) => console.warn("Audio blocked by browser policy:", err));
    }
  };

  const NavOptions: { title: string; to: string }[] = [
    { title: "About", to: "about" },
    { title: "Skills", to: "skills" },
    { title: "Work", to: "work" },
    { title: "Projects", to: "projects" },
    { title: "Contact", to: "contact" },
  ];

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={() => scroll.scrollToTop()}>
            Christine Wang
          </NavLogo>
          <MobileIcon onClick={props.toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            {NavOptions.map((option, i) => {
              return (
                <li key={i} style={{ height: "80px" }}>
                  <NavLinks
                    to={option.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    onSetActive={handleSetActive}
                  >
                    {option.title}
                  </NavLinks>
                </li>
              );
            })}
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/message">Message</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;