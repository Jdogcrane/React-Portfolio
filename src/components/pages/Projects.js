import React from 'react';
import { Slider, Slide, Caption, Row, Col, Parallax } from 'react-materialize';
export default function Projects() {
  return (
    <div className="">
      <div className="projectBlock">


        <Slider className="spacingProjectFull"
          fullscreen={true}
          options={{
            duration: 500,
            height: 400,
            indicators: true,
            interval: 6000
          }}
        >
          <Slide image={<img alt="" src="https://cdn.discordapp.com/attachments/709148993262977068/870349052263411773/covidCats.jpg" />}>
            <Caption placement="center">
              <h3>
                This is our big Tagline!
              </h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img alt="" src="https://cdn.discordapp.com/attachments/709148993262977068/870349042708799558/forumFriends.png" />}>
            <Caption placement="left">
              <h3>
                Left Aligned Caption
              </h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img alt="" src="https://cdn.discordapp.com/attachments/709148993262977068/870349032088805488/employeeManager.png" />}>
            <Caption placement="right">
              <h3>
                Right Aligned Caption
              </h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img alt="" src="https://cdn.discordapp.com/attachments/709148993262977068/870349046051643433/passwordGenerator.png" />}>
            <Caption placement="center">
              <h3>
                This is our big Tagline!
              </h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </Caption>
          </Slide>
        </Slider>
      </div>

      <Row>
        <Col
          className=" white-text"
          s={12}
          m={6}
          l={6}
        >
          <Parallax className="animate__fadeIn animate__animated projects-container"
            image={<a href="#">
              <img alt="backdrop" src="https://cdn.discordapp.com/attachments/709148993262977068/870349052263411773/covidCats.jpg" />
            </a>}
            options={{
              responsiveThreshold: 0
            }}
          />

        </Col>
        <Col
          className=" white-text"
          s={12}
          m={6}
          l={6}
        >
          <Parallax className="animate__fadeIn animate__animated projects-container"
            image={<a href="#">
              <img alt="backdrop" src="https://cdn.discordapp.com/attachments/709148993262977068/870349042708799558/forumFriends.png" />
            </a>}
            options={{
              responsiveThreshold: 0
            }}
          />

        </Col>
        <Col
          className=" white-text"
          s={12}
          m={6}
          l={6}
        >

          <Parallax className="animate__fadeIn animate__animated projects-container"
            image={<a href="#">
              <img alt="backdrop" src="https://cdn.discordapp.com/attachments/709148993262977068/870349032088805488/employeeManager.png" />
            </a>}
            options={{
              responsiveThreshold: 0
            }}
          />
        </Col>
        <Col
          className=" white-text"
          s={12}
          m={6}
          l={6}
        >

          <Parallax className="animate__fadeIn animate__animated projects-container"
            image={<a href="#">
              <img alt="backdrop" src="https://cdn.discordapp.com/attachments/709148993262977068/870349046051643433/passwordGenerator.png" />
            </a>}
            options={{
              responsiveThreshold: 0
            }}
          />

        </Col>
        

      </Row>


    </div>
  );
}
