import React from 'react';
import NavLinks from './NavLinks';
import 'materialize-css';
import { Button, SideNav, SideNavItem, Icon } from 'react-materialize';
const NavTabs = (props) => {

  return (
    <div>
      <style>

      </style>

      <div class="navbar-fixed">
        <nav class="nav">
      <SideNav
        id="SideNav-10"
        options={{
          draggable: true
        }}
        trigger={<Button node="button">SIDE NAV DEMO</Button>}
      >
        <SideNavItem
          user={{
            background: 'https://placeimg.com/640/480/tech',
            email: 'jdandturk@gmail.com',
            image: 'static/media/react-materialize-logo.824c6ea3.svg',
            name: 'John Doe'
          }}
          userView
        />
        <SideNavItem
          href="#!icon"
          icon={<Icon>cloud</Icon>}
        >
          First Link With Icon
        </SideNavItem>
        <SideNavItem href="#!second">
          Second Link
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>
          Subheader
        </SideNavItem>
        <SideNavItem
          href="#!third"
          waves
        >
          Third Link With Waves
        </SideNavItem>
      </SideNav>
          <div class="container">
            <div class="nav-wrapper">
              <a href="https://github.com/Jdogcrane" id="home" class="titleBig" target="_blank">Joshua Crane</a>
              <a href="https://github.com/Jdogcrane" target="_blank" class="titleSmall">Josh</a>
              <a data-target="mobile-nav" class="sidenav-trigger">
                <i class="material-icons white-text circle btn-floating center black-text ">menu</i>
              </a>
              <ul class="right hide-on-med-and-down">
                <NavLinks {...props} />
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#aboutme">About Me</a>
                </li>
                <li>
                  <a class="white-text" href="#projects">Projects</a>
                </li>
                <li>
                  <a href="https://jdogcrane.github.io/Portfolio_Website/assests/resume/resume1.pdf"
                    target="_blank">Resume</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavTabs;
