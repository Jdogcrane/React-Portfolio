import React from 'react';
import { Slider, Slide, Caption, Row, Col, Parallax } from 'react-materialize';
export default function About() {
  return (
    <>
      {/* Space */}
      <section id="parallax-1">

        <div className=" center">
          <div className="container center ">

            <div className=" contain animate__animated animate__backInUp  ">
              <img className="me circle z-depth-3 space1" src="https://cdn.discordapp.com/attachments/709148993262977068/870349043782537236/me.png" alt="me" href="#aboutme" />
            </div>
            <div className="center ">

              <a className="animate__animated animate__fadeInUpBig animate__delay-1s btn-floating spacing1" rel="noreferrer" href="https://github.com/Jdogcrane" target="_blank">
                <i className="fab fa-github light-blue-text"></i></a>

              <a className="animate__animated animate__fadeInUpBig animate__delay-2s btn-floating spacing1"
                href="https://www.linkedin.com/in/joshua-crane-911532210/" rel="noreferrer" target="_blank">
                <i className="fab fa-linkedin light-blue-text"></i></a>

              <a className="animate__animated animate__fadeInUpBig animate__delay-3s btn-floating spacing1" rel="noreferrer" href="https://www.instagram.com/joshua_crane/"
                target="_blank">
                <i className="fab fa-instagram light-blue-text"></i></a>

              <a className="animate__animated animate__fadeInUpBig animate__delay-4s btn-floating spacing1"
                href="https://open.spotify.com/user/jdogcrane?si=ca332a64d48c4b49" rel="noreferrer" target="_blank">
                <i className="fab fa-spotify light-blue-text"></i></a>
            </div>
          </div>

        </div>
        <div className="center contain1 animate__animated animate__fadeInUpBig animate__delay-5s ">
          <h1 className="grey-text text-lighten-2 flow-text title space ">Hey,<span> I'm</span> <a
            href="https://github.com/Jdogcrane" className="link"> Josh </a></h1>
          <div className="center">
            <p className="grey-text text-lighten-2 flow-text borderTop  space">I graduated from <a
              href="https://www.uncc.edu/" className="link"> UNCC </a>as a Full Stack Web
              Developer</p>
            <br />

            <p className="grey-text text-lighten-2 flow-text ">
              I specialize in UI-UX Design
            </p>
          </div>

          <p className="grey-text text-lighten-2 flow-text borderBot space title ">What I Learned</p>
          <br />

          <div className="container contain1 center">

            <p className="grey-text spacing2">Front End</p>
            <p className="grey-text text-lighten-2 flow-text text borderRound">
              HTML/CSS, Git, Bootstrap, Materialize, Bulma, JavaScript, jQuery, APIs & AJAX</p>

            <p className="grey-text space spacing2">Back End</p>
            <p className="grey-text text-lighten-2 flow-text borderRound">
              Node, Express servers, MySQLHandlebars, Sequelize, Testing, Error Handling, Heroku</p>

            <p className="grey-text space spacing2">Performance</p>
            <p className="grey-text text-lighten-2 flow-text text borderRound">
              MongoDB, Progressive Web Apps (PWAs), React, MERN, Computer Science</p>
          </div>
          <br /> <br />
          <div className="borderBot "></div>
        </div>
      </section>

      {/* Clouds */}
      <div className="transition1">
        <p>transition</p>
      </div>
      <section id="parallax-2" className="center">

        <div className="contain1">
          <p className="grey-text text-lighten-2 flow-text text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           In eu ultrices orci. Proin tincidunt, elit nec dapibus pellentesque,
           lectus nibh consectetur nunc, eu tincidunt justo augue ac orci. Donec euismod efficitur lectus et imperdiet.
            Nulla a enim vitae mi porttitor varius. Nunc dapibus eu lorem in venenatis. Vivamus aliquet ut elit nec pellentesque.
             Nulla dictum, justo vitae bibendum vehicula, lorem odio tempus sem, blandit suscipit ligula eros ut nunc. Sed cursus dui arcu,
           semper cursus lorem placerat ac. Donec non malesuada nunc. Nulla sed dictum erat. Vivamus vel semper sem.
            Integer ut ullamcorper augue. In porttitor sapien et vehicula dapibus. </p>
        </div>

        {/* City */}
      </section>
      <div className="transition2">
        <p>transition</p>
      </div>
      <section id="parallax-3" className="hero is-large">
        <div className="center container">
          <div className="container">
          <p className="black-text text-lighten-2 flow-text text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           In eu ultrices orci. Proin tincidunt, elit nec dapibus pellentesque,
           lectus nibh consectetur nunc, eu tincidunt justo augue ac orci. Donec euismod efficitur lectus et imperdiet.
            Nulla a enim vitae mi porttitor varius. Nunc dapibus eu lorem in venenatis. Vivamus aliquet ut elit nec pellentesque.
             Nulla dictum, justo vitae bibendum vehicula, lorem odio tempus sem, blandit suscipit ligula eros ut nunc. Sed cursus dui arcu,
           semper cursus lorem placerat ac. Donec non malesuada nunc. Nulla sed dictum erat. Vivamus vel semper sem.
            Integer ut ullamcorper augue. In porttitor sapien et vehicula dapibus. </p>
          </div>
        </div>
      </section>
    </>
  );
}
