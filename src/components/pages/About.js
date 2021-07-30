import React from 'react';
import { Button, Card, Row, Col, Parallax } from 'react-materialize';
export default function About() {
  return (
    <>
    
      <div>
        <div className="container border animate__animated animate__backInUp">
          <div className="container center">
            <p className="flow-text white-text" >About Me</p>
          </div>
          <div className="container center">
            <img className="me circle z-depth-3" src="https://cdn.discordapp.com/attachments/709148993262977068/870349043782537236/me.png" alt="me" href="#aboutme" />
          </div>
          <div className="container center">

            <a className="waves-effect waves-light btn-floating social spacing1" rel="noreferrer" href="https://github.com/Jdogcrane" target="_blank">
              <i className="fab fa-github black white-text"></i></a>

            <a className="waves-effect waves-light btn-floating social spacing1"
              href="https://www.linkedin.com/in/joshua-crane-911532210/" rel="noreferrer" target="_blank">
              <i className="fab fa-linkedin black white-text"></i></a>

            <a className="waves-effect waves-light btn-floating social spacing1" rel="noreferrer" href="https://www.instagram.com/joshua_crane/"
              target="_blank">
              <i className="fab fa-instagram black white-text"></i></a>

            <a className="waves-effect waves-light btn-floating social spacing1"
              href="https://open.spotify.com/user/jdogcrane?si=ca332a64d48c4b49" rel="noreferrer" target="_blank">
              <i className="fab fa-spotify black white-text"></i></a>
          </div>


          <div className="container">
            <p className="grey-text text-lighten-2 flow-text text">I'm currently in a 3 month program at <a
              href="https://www.uncc.edu/" className="link"> UNCC </a> to learn to become a certified Full-Stack Web
              Developer. <br /> <br /> Over my career I have
              developed strong social skills with people from many walks of life.
              Learned to become adaptable and teachable.
              I strive to lead others to success with me and not behind me.
              Maintained a very professional work ethic and strive to do better attitude.
              Learned to handle stressful fast-paced environments and how to structure priorities.</p>
          </div>
        </div>
      </div>
    </>
  );
}
