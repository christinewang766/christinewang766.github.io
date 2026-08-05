import React from "react";
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

const Navbar = (props: { toggle: () => void }) => {

  const NavOptions: { title: string; to: string }[] = [
    {
      title: "About",
      to: "about",
    },
    {
      title: "Skills",
      to: "skills",
    },
    {
      title: "Work",
      to: "work",
    },
    {
      title: "Projects",
      to: "projects",
    },
    {
      title: "Contact",
      to: "contact",
    },
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
            {NavOptions.map((props, i) => {
              return (
                <div key={i}>
                  <li style={{ height: "80px" }}>
                    <NavLinks
                      to={props.to}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-80}
                    >
                      {props.title}
                    </NavLinks>
                  </li>
                </div>
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
