import React from 'react';
import '../../Styles/Projects.css';
import { Row, Col } from 'react-materialize';
export default function Projects() {
  return (

    <>
      <section id="parallax-header" className="outer-pro1">

        <Row className=" space container ">
          <Col
            className=" white-text animate__animated  animate__delay-3s animate__fadeIn title center"
            s={12}
            m={12}
            l={12}
          >
            <p>Things I've Done</p>

          </Col>
          <Col
            className=" white-text animate__animated  animate__delay-3s animate__fadeIn normalText center spaceSmall"
            s={12}
            m={12}
            l={12}
          >
            <p>My highlighted projects I've worked on</p>

            <div className=" space2">
              <i class="fas orange-text animate__animated fa-angle-double-down"></i>

            </div>
          </Col>
        </Row>
      </section>
      <section id="parallax-pro1" className="outer-pro1">
        <div className="overlay-pro1">
        </div>



        <Row className="animate__animated animate__fadeIn animate__delay-3s  container">
          <Col
            className=" white-text "
            s={12}
            m={6}
            l={6}
          >
            <div className=" ">
              <div className="">
                <div className="container normalText center">
                  <p className="title borderBotG ">
                    Covid & Cats
                  </p>
                  <p> A website that grabs data from the entire USA with a few clicks using an API to show covid data and Cat Gif's. Designed and built using Materialize framework</p>
                  <div className="spaceSmall">
                    <a href="https://jdogcrane.github.io/covid-and-cats/" target="__blank" className="link borderRoundG animate__fadeInUpBig">Learn More <i class="fas orange-text fa-angle-double-right"></i></a>

                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col
            className=" white-text "
            s={12}
            m={6}
            l={6}
          >
            <div className=" ">
              <div className="">
                <div className="img-area container">

                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872962866016321536/unknown.png" alt="projectIMG" className="img-box box-3"></img>
                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872963074288681020/unknown.png" alt="projectIMG" className="img-box box-2"></img>
                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872963214541991946/unknown.png" alt="projectIMG" className="img-box box-1"></img>

                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section id="parallax-pro2" className="outer-pro1 ">

        <Row className="animate__animated animate__fadeIn animate__delay-3s space container">
          <Col
            className=" white-text "
            s={12}
            m={6}
            l={6}
          >
            <div className=" ">
              <div className="">
                <div className="img-area container">

                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872962721631592549/unknown.png" alt="projectIMG" className="img-box box-3"></img>
                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872962587082506270/unknown.png" alt="projectIMG" className="img-box box-2"></img>
                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872962515531870228/unknown.png" alt="projectIMG" className="img-box box-1"></img>

                </div>
              </div>
            </div>
          </Col>
          <Col
            className=" white-text "
            s={12}
            m={6}
            l={6}
          >
            <div className=" ">
              <div className="">
                <div className="container normalText center">
                  <p className="title borderBotG">
                    Forum Friends
                  </p>
                  <p> A social media platform with login auth and stored data in MongoDB built using Materialize framework.</p>
                  <div className="spaceSmall">
                    <a href="https://forum-friends.herokuapp.com/" target="__blank" className="link borderRoundG"><i class="fas orange-text fa-angle-double-left"></i> Learn More</a>

                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section id="parallax-pro3" className="outer-pro1 ">

        <Row className="animate__animated animate__fadeIn animate__delay-3s space1 container ">

          <Col
            className=" white-text "
            s={12}
            m={6}
            l={6}
          >
            <div className=" ">
              <div className="">
                <div className="container normalText center">
                  <p className="title borderBotG">
                    Rapid Resume
                  </p>
                  <p> Build a resume stored in mongoDB using, React, Express Servers, Auth and Bulma as the framework.</p>
                  <div className="spaceSmall">
                    <a href="https://rapid-resume.herokuapp.com/" target="__blank" className="link borderRoundG">Learn More <i class="fas orange-text fa-angle-double-right"></i></a>

                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col
            className=" white-text"
            s={12}
            m={6}
            l={6}
          >
            <div className=" ">
              <div className="">
                <div className="img-area container">
                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872963637239762995/unknown.png" alt="projectIMG" className="img-box box-3"></img>
                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872964035400830976/unknown.png" alt="projectIMG" className="img-box box-2"></img>
                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872963710736556042/chrome_LojRghipQe.jpg" alt="projectIMG" className="img-box box-1"></img>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}
