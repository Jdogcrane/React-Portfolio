import React from 'react';
import { SideNav, SideNavItem } from 'react-materialize';
import { Link, NavLink } from 'react-router-dom';

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
              to="/" className="black"
            >
              Home
            </SideNavItem>
            <SideNavItem divider />
            <SideNavItem to="/projects">
              Projects
            </SideNavItem>
            <SideNavItem divider />
            <SideNavItem
              to="/resume"
              waves
            >
              Resume
            </SideNavItem>
            <SideNavItem divider />
            <div className="center ">
              <a className="animate__animated animate__fadeInUpBig animate__delay-1s btn-floating spacing1" rel="noreferrer" href="https://github.com/Jdogcrane" target="_blank">
                <i className="fab fa-github pink-text"></i></a>

              <a className="animate__animated animate__fadeInUpBig animate__delay-2s btn-floating spacing1"
                href="https://www.linkedin.com/in/joshua-crane-911532210/" rel="noreferrer" target="_blank">
                <i className="fab fa-linkedin pink-text"></i></a>

              <a className="animate__animated animate__fadeInUpBig animate__delay-3s btn-floating spacing1" rel="noreferrer" href="https://www.instagram.com/joshua_crane/"
                target="_blank">
                <i className="fab fa-instagram pink-text"></i></a>

              <a className="animate__animated animate__fadeInUpBig animate__delay-4s btn-floating spacing1"
                href="https://open.spotify.com/user/jdogcrane?si=ca332a64d48c4b49" rel="noreferrer" target="_blank">
                <i className="fab fa-spotify pink-text"></i></a>
                </div>
          </SideNav>
            <div>
              <div className="container  animate__animated animate__backInDown animate__delay-4s">
                <div className="nav-wrapper ">
                  <a href="https://github.com/Jdogcrane" rel="noreferrer" target="_blank" className="titleBig left">Joshua Crane</a>
                  <Link to="https://github.com/Jdogcrane" target="_blank" className="titleSmall">Josh</Link>

                  <ul className="right hide-on-med-and-down">
                    <li>
                      <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/projects" onClick={() => window.scrollTo(0, 0)} >Projects</NavLink>
                    </li>
                    <li>
                      <NavLink to="/resume" onClick={() => window.scrollTo(0, 0)}>Resume</NavLink>
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
