import React from 'react';
import { Button, SideNav, SideNavItem, Icon, Parallax } from 'react-materialize';
import { Link } from 'react-router-dom';

const NavTabs = () => {

  return (
    <div>
      <style>

      </style>
      <div className="navbar-fixed " id="navbar">
        <nav className="nav ">
          <SideNav
            id="SideNav-10"
            options={{
              draggable: true
            }}
            trigger={<i className="material-icons white-text circle btn-floating center black-text titleSmall" node="button">menu</i>}
          >
            <SideNavItem
              user={{
                background: 'https://cdn.discordapp.com/attachments/709148993262977068/870349048568242236/backdrop.jpg',
                email: 'Jdogcrane@gmail.com',
                image: 'https://cdn.discordapp.com/attachments/709148993262977068/870349043782537236/me.png',
                name: 'Joshua Crane'
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
            <div className="container  animate__animated animate__backInDown animate__delay-4s">
              <div className="nav-wrapper ">
                <a href="https://github.com/Jdogcrane" rel="noreferrer" target="_blank" className="titleBig left">Joshua Crane</a>
                <Link to="https://github.com/Jdogcrane" target="_blank" className="titleSmall">Josh</Link>
                
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
      
    </div>
  );
}

export default NavTabs;
