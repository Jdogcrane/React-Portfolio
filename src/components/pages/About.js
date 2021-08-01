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
              s={6}
              m={4}
              l={4}
            >
              <div className="spacing2">

                <Link to="journey" smooth={"true"} className="white-text link flow-text  italic borderBotG active">The Journey Here</Link>
              </div>

            </Col>
            <Col
              className=" white-text space"
              s={6}
              m={4}
              l={4}
            >
              <div className="spacing2">

                <Link to="aboutMe" smooth={"true"} className="white-text flow-text link  italic borderBotG active">Get to Know Me</Link>
              </div>

            </Col>
            <Col
              className=" white-text space"
              s={6}
              m={4}
              l={4}
            >
              <div className="spacing2">

                <NavLink to="/contact" smooth={"true"} className="white-text flow-text link  italic borderBotG active">Connect & More</NavLink>
              </div>

            </Col>
            <Col
              className=" white-text space"
              s={6}
              m={6}
              l={6}
            >
              <div className="">

                <NavLink to="/projects" smooth={"true"} className="white-text flow-text link  italic borderBotG active" onClick={() => window.scrollTo(0, 0)}>Things I've Done</NavLink>
              </div>

            </Col>
            <Col
              className=" white-text space"
              s={12}
              m={6}
              l={6}
            >
              <div className="">

                <NavLink to="/resume" smooth={"true"} className="white-text flow-text link  italic borderBotG active" onClick={() => window.scrollTo(0, 0)}>The Specifics</NavLink>
              </div>

            </Col>
          </Row>


        </div>
      </section>

      {/* Clouds */}
      <div id="journey">
      </div>
      <section id="parallax-2" className="outer ">
        <div className="overlay">
        </div>


        <div className="contain1  animate__animated animate__fadeInUpBig animate__delay-5s ">
          {/* what lead me here */}
          <p className="white-text text-lighten-2 flow-text borderBot space title center ">What lead me here?</p>
          <br />

          <div className="contain1 spacing2 ">

            <p className="white-text text-lighten-2 flow-text text ">
              Living in the far out country where It might take one hour just to get to a store I wouldn't let that stop me from learning about tech. Always jump at the opportunity to learn more about all things tech.
              Later I picked up an advanced art class in highschool that unlocked a side of me that I didn't know I had.</p>
            <br />
            <p className="white-text text-lighten-2 flow-text text ">
              As I got older, the drive for learning never stopped. My hobbies seemed to center around all sorts of tech. From Custom built PC's all the way to custom FPV drones, I was there for it.
              <br /><br />
              So how does a 22 year old guy who grew up in the country side with an eye for art end up as a Web Developer? Well, I think its safe to say, it was just natural.</p>

            {/* where im going */}
            <p className="white-text text-lighten-2 flow-text borderBot space title center ">Where I'm Going</p>
            <br />
            <p className="white-text text-lighten-2 flow-text text ">
              Over the past year I have self taught myself to learn many of the fundamentals of front end work. I decided to further develope my skills by attended a coding program at <a
                href="https://www.uncc.edu/" className="link borderBotBNo white-text italic"> UNCC </a> <span className="italic">- 8/1/21</span> </p>
            <div>
              <p className="white-text text-lighten-2 flow-text "><span className="">
                <br></br>I then graduated as a Full Stack Web Developer specializing in UI-UX design. Near the top of my class and confident with the skills learned I set out to find a workplace that will fit me best.</span></p>
              <br />
            </div>
            <p className="space title center white-text text-lighten-2 flow-text spacing2">What I Know</p>
            <div className="borderBotBNo"></div>
            <Row className="">
              <Col
                className=" white-text "
                s={4}
                m={4}
                l={4}
              >
                <p className="black-text borderBotBNo borderSide center  ">Front-End</p>
                <div className="white-text text-lighten-2 flow-text text  center">
                  <ul>
                    <li>Materialize</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>Bulma</li>
                    <li>AJAX</li>
                    <li>APIs</li>
                    <li>Git</li>
                  </ul>
                </div>
              </Col>

              <Col
                className=" white-text "
                s={4}
                m={4}
                l={4}
              >
                <p className="black-text borderBotBNo borderSide center">Performance</p>
                <div className="white-text text-lighten-2 flow-text text  center">
                  <ul>
                    <li>Progressive Web Apps</li>
                    <li>Computer Science</li>
                    <li>MongoDB</li>
                    <li>MERN</li>
                    <li>React</li>
                  </ul>
                </div>

              </Col>
              <Col
                className=" white-text "
                s={4}
                m={4}
                l={4}
              >
                <p className="black-text borderBotBNo borderSide center">Technical/Back-End</p>
                <div className="white-text text-lighten-2 flow-text text  center ">
                  <ul>
                    <li>Express servers</li>
                    <li>Error Handling</li>
                    <li>Handlebars</li>
                    <li>Materialize</li>
                    <li>Sequelize</li>
                    <li>Testing</li>
                    <li>Heroku</li>
                    <li>MySQL</li>
                    <li>Node</li>
                  </ul>
                </div>

              </Col>
            </Row>
          </div>
        </div>

        {/* City */}
      </section>
      <div className="transition2" id="aboutMe">
      </div>

      <section id="parallax-3" className="outer2">
        <div className="overlay2">
        </div>
        <div className=" contain1 animate__animated animate__fadeInUpBig animate__delay-5s ">
          <h1 className="white-text center text-lighten-2 flow-text title space ">The<span> Next</span> <a
            href="https://github.com/Jdogcrane" className="link white-text"> Path </a>
            <br />
            <span className="animate__animated animate__fadeIn animate__delay-1s animate__infinite"> .</span>
            <br />
            <span className="animate__animated animate__fadeIn animate__delay-2s animate__infinite"> .</span>
            <br />
            <span className="animate__animated animate__fadeIn animate__delay-3s animate__infinite"> .</span></h1>
            <form id="javascript_form" className=" space container messenger">

              <div className=" borderRound center ">

                <input type="text" name="subject" placeholder="Subject" />
                <textarea name="text" placeholder="Message" className="spacing normalText"></textarea>

                {/* <!-- not required, but we'd appreciate it if you'd link to us somewhere on your site --> */}
                <input type="submit" id="js_send" value="Send" className="btn spacing2 white black-text" />
                <p className="white-text">Powered by <a href="https://postmail.invotes.com" target="__blank">PostMail</a></p>
              </div>
          <div className="">
              <ul>
                <li><a className="link borderBotGNo spacing2" href="Joshua.crane.me@gmail.com" target="__blank">Email</a></li>
                <li><a className="link borderBotGNo spacing2" href="https://github.com/Jdogcrane" target="__blank">GitHub</a></li>
                <li><a className="link borderBotGNo spacing2" href="https://www.linkedin.com/in/joshua-crane-911532210/" target="__blank">LinkedIn</a></li>


              </ul>
          </div>
            </form>
        </div>
        <div className="container contain1 space ">

        </div>

      </section>
    </>
  );
}
