import React from 'react'
import { SidebarContainer, Icon, SidebarLink, SidebarRoute, CloseIcon } from './SidebarElements'

const Sidebar = (props: { isOpen: boolean, toggle: () => void }) => {

  return (
    <div style={{ pointerEvents: props.isOpen ? 'auto' : 'none' }}>
      <SidebarContainer style={{ opacity: props.isOpen ? '100%' : '0' }}>
        <Icon onClick={props.toggle}>
          <CloseIcon />
        </Icon>
        <div style={{ color: '#8ba888' }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <SidebarLink to="about" onClick={props.toggle}>About</SidebarLink>
            <SidebarLink to="work" onClick={props.toggle}>Work</SidebarLink>
            <SidebarLink to="projects" onClick={props.toggle}>Projects</SidebarLink>
            <SidebarLink to="contact" onClick={props.toggle}>Contact</SidebarLink>
          </ul>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SidebarRoute to="/message" onClick={props.toggle} />
          </div>
        </div>
      </SidebarContainer>
    </div>
  )
}

export default Sidebar