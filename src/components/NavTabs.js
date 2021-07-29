import React from 'react';
import { Button, SideNav, SideNavItem, Icon, Parallax } from 'react-materialize';
import { Link } from 'react-router-dom';

const NavTabs = () => {

  return (
    <div>
      <style>

      </style>
      <div className="navbar-fixed">
        <nav className="nav ">
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
          <div>
            <div className="container animate__animated animate__backInDown">
              <div className="nav-wrapper">
              <Link to="https://github.com/Jdogcrane" id="home" className="titleBig" target="_blank">Joshua Crane</Link>
              <Link to="https://github.com/Jdogcrane" target="_blank" className="titleSmall">Josh</Link>
              <Link data-target="mobile-nav" className="sidenav-trigger">
                  <i className="material-icons white-text circle btn-floating center black-text ">menu</i>
                </Link>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <Link to="/" >Home</Link>
                  </li>
              
                  <li>
                    <Link to="/projects" >Projects</Link>
                  </li>
                  <li>
                    <Link to="/resume">Resume</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Parallax className="animate__fadeIn animate__animated"
        image={<img alt="backdrop" src="https://cdn.discordapp.com/attachments/709148993262977068/870349048568242236/backdrop.jpg" />}
        options={{
          responsiveThreshold: 0
        }}
      />
    </div>
  );
}

export default NavTabs;
