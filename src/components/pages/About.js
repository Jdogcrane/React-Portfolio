import React from 'react';
import { Slider, Slide, Caption, Row, Col, Parallax } from 'react-materialize';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom';
export default function About() {
  return (
    <>
      {/* Space */}
      <section id="parallax-1">

        <div id="/" className=" center">
          <div className="container center ">

            <div className="contain animate__animated animate__backInUp  ">
              <img className="me circle z-depth-3 space1" src="https://cdn.discordapp.com/attachments/709148993262977068/870349043782537236/me.png" alt="me" href="#aboutme" />
            </div>
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
          </div>

        </div>
        <div className="center container ">
          <h1 className="grey-text text-lighten-2 flow-text title space animate__animated animate__fadeInUpBig animate__delay-5s">Hey,<span> I'm</span> <a
            href="https://github.com/Jdogcrane" className="link"> Josh </a>
          </h1>
          <div className="center">
            <br />
            <p className="grey-text text-lighten-2 animate__animated animate__fadeIn animate__delay-10s flow-text ">Welcome to my personal site designed and built by me for you.</p>

          </div>


          <p className="grey-text text-lighten-2 flow-text space2 title ">Explore<span className="animate__animated animate__fadeIn animate__delay-1s animate__infinite"> .</span>
            <span className="animate__animated animate__fadeIn animate__delay-2s animate__infinite"> .</span>
            <span className="animate__animated animate__fadeIn animate__delay-3s animate__infinite"> .</span></p>


          <Row>
            <Col
              className=" white-text space"
              s={12}
              m={6}
              l={4}
            >
              <div className="spacing2">

                <Link to="journey" smooth={true} className="white-text link header italic borderBotG active">The Journey Here</Link>
              </div>

            </Col>
            <Col
              className=" white-text space"
              s={12}
              m={6}
              l={4}
            >
              <div className="spacing2">

                <Link to="aboutMe" smooth={true} className="white-text link header italic borderBotG active">Get to Know Me</Link>
              </div>

            </Col>
            <Col
              className=" white-text space"
              s={12}
              m={6}
              l={4}
            >
              <div className="spacing2">

                <Link to="connection" smooth={true} className="white-text link header italic borderBotG active">Connect & More</Link>
              </div>

            </Col>
            <Col
              className=" white-text space"
              s={12}
              m={6}
              l={6}
            >
              <div className="">

                <NavLink to="/projects" smooth={true} className="white-text link header italic borderBotG active" onClick={() => window.scrollTo(0, 0)}>Things I've Done</NavLink>
              </div>

            </Col>
            <Col
              className=" white-text space"
              s={12}
              m={6}
              l={6}
            >
              <div className="">

                <NavLink to="/resume" smooth={true} className="white-text link header italic borderBotG active" onClick={() => window.scrollTo(0, 0)}>The Specifics</NavLink>
              </div>

            </Col>
          </Row>


        </div>
      </section>

      {/* Clouds */}
      <div className="transition1" id="journey">
      </div>
      <section id="parallax-2" >

        <div className="contain1 animate__animated animate__fadeInUpBig animate__delay-5s ">
          <br />
          <div>
            <p className="black-text text-lighten-2 flow-text text header">
              Over the past year I have self taught myself to learn many of the fundamentals of front end work. I decided to further develope my skills and attended a coding program at <a
                href="https://www.uncc.edu/" className="link underscore black-text italic"> UNCC </a></p>
            <div className="center">
              <p className="black-text text-lighten-2 flow-text  "><span className="header">
                <br></br>I graduated as a Full Stack Web Developer</span></p>
              <br />
              <p className="black-text text-lighten-2 flow-text ">
                I specialize in UI-UX Design
              </p>
            </div>


          </div>

          <p className="black-text text-lighten-2 flow-text borderBot space header ">What I Learned</p>
          <br />

          <div className="container contain1 center header">

            <p className="black-text spacing2 header">Front End</p>
            <p className="black-text text-lighten-2 flow-text text header">
              HTML/CSS, Git, Bootstrap, Materialize, Bulma, JavaScript, jQuery, APIs & AJAX</p>

            <p className="black-text space spacing2 header">Back End</p>
            <p className="black-text text-lighten-2 flow-text header">
              Node, Express servers, MySQL, Handlebars, Sequelize, Testing, Error Handling & Heroku</p>

            <p className="black-text space spacing2 header">Performance</p>
            <p className="black-text text-lighten-2 flow-text text">
              MongoDB, Progressive Web Apps (PWAs), React, MERN & Computer Science</p>
          </div>
          <br /> <br />
          <div className="borderBot "></div>
        </div>

        {/* City */}
      </section>
      <div className="transition2" id="aboutMe">
      </div>
      <section id="parallax-3" className="hero is-large">
        <div className="center contain1 animate__animated animate__fadeInUpBig animate__delay-5s ">
          <h1 className="black-text text-lighten-2 flow-text title space ">Hey,<span> I'm</span> <a
            href="https://github.com/Jdogcrane" className="link black-text"> Josh </a>
            <span className="animate__animated animate__fadeIn animate__delay-1s animate__infinite"> .</span>
            <span className="animate__animated animate__fadeIn animate__delay-2s animate__infinite"> .</span>
            <span className="animate__animated animate__fadeIn animate__delay-3s animate__infinite"> .</span></h1>
          <div className="center">
            <p className="black-text text-lighten-2 flow-text borderTop  space">I graduated from <a
              href="https://www.uncc.edu/" className="link black-text"> UNCC </a>as a Full Stack Web
              Developer</p>
            <br />

            <p className="black-text text-lighten-2 flow-text ">
              I specialize in UI-UX Design
            </p>
          </div>

          <p className="black-text text-lighten-2 flow-text borderBot space header ">What I Learned</p>
          <br />

          <div className="container contain1 center header">

            <p className="black-text header spacing2">Front End</p>
            <p className="black-text header text-lighten-2 flow-text text borderBot">
              HTML/CSS, Git, Bootstrap, Materialize, Bulma, JavaScript, jQuery, APIs & AJAX</p>

            <p className="black-text header space spacing2">Back End</p>
            <p className="black-text header text-lighten-2 flow-text borderBot">
              Node, Express servers, MySQL, Handlebars, Sequelize, Testing, Error Handling & Heroku</p>

            <p className="black-text header space spacing2">Performance</p>
            <p className="black-text header text-lighten-2 flow-text text borderBot">
              MongoDB, Progressive Web Apps (PWAs), React, MERN & Computer Science</p>
          </div>
          <br /> <br />
          <div className="borderBot "></div>
        </div>
      </section>
    </>
  );
}
