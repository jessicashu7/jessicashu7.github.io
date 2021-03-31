import './Home.css';
import {AboutMe, Work} from "containers";
import Typist from 'react-typist';
import React, {useState} from 'react';
import {isMobileOnly} from "react-device-detect";
import {Container, Navbar, Nav, Jumbotron} from 'react-bootstrap';
import {Color} from 'Colors';

const aboutMeLink = "aboutme";
const workLink = "work";

function Home() {
  const [titleDone, setTitleDone] = useState(false);

  return (
    <div>
      <Navbar
        id="scrollspy-nav"
        bg="light"
        expand="lg"
        fixed="top"
        variant="light">
        <Navbar.Brand href="#intro">Jessica Shu</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-bar-content" />
        <Navbar.Collapse id="nav-bar-content">
          <Nav className="mr-auto">
            <Nav.Link href={`#${aboutMeLink}`} >About Me</Nav.Link>
            <Nav.Link href={`#${workLink}`}>Work</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron fluid
        id="intro"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('images/LaSeine.jpg')"
        }}>
        <Container className="text-center">
          {isMobileOnly ? (
            <React.Fragment>
              <h1 className={"display-2 greeting"}>
                Hi, I'm Jessica Shu
              </h1>
              <h1 className={"lead subgreeting"}>
                Thanks for visiting my website, where I document my coding journey.
              </h1>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typist
                className={"display-1 greeting"}
                startDelay={500}
                cursor={{
                  show: true,
                  blink: false,
                  element: '|',
                  hideWhenDone: true,
                  hideWhenDoneDelay: 0,
                }}
                onTypingDone={() => {
                  setTitleDone(true);
                }}>
                Hi, I'm Jessica Shu
                <Typist.Delay ms={1000} />
              </Typist>
              {
                titleDone ? (
                  <Typist
                    className={"lead subgreeting"}
                    startDelay={500}
                    avgTypingDelay={55}
                    cursor={{
                      show: true,
                      blink: false,
                      element: '|',
                      hideWhenDone: true,
                      hideWhenDoneDelay: 750,
                    }}>
                    Thanks for visiting my website, where I document my coding journey.
                    <Typist.Delay ms={1000} />
                    {' :) '}
                  </Typist>
                ) : null
              }
            </React.Fragment>
          )
          }
        </Container>
      </Jumbotron>

      <div id={aboutMeLink} className="py-5" style={{backgroundColor: Color.purple}}>
        <AboutMe />
      </div>

      <div id={workLink} className="py-5">
        <Work />
      </div>

      <div id="footer" className="py-3">Check out my code for this website on the&nbsp;<a href="https://github.com/jessicashu7/jessicashu7.github.io" target="_blank">github repo</a>!</div>

    </div >
  );
}

export default Home;
