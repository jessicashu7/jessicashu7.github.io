import './Home.css';
import {AboutMe, Work} from "containers";
import Typist from 'react-typist';
import React, {useState} from 'react';
import {isMobileOnly} from "react-device-detect";

function Home() {
  const [titleDone, setTitleDone] = useState(false);

  return (
    <div>
      <nav
        id="scrollspy-nav"
        className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
        <a className="navbar-brand" href="#jumboDiv">
          Jessica Shu
          <span className="sr-only">(current)</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#aboutMeDiv">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#workDiv">
                My Work
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        id="jumboDiv"
        className="jumbotron jumbotron-fluid"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('images/LaSeine.jpg')"
        }}>
        <div className="container text-center">
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
        </div>
      </div>
      <div id="aboutMeDiv" className="py-5">
        <AboutMe />
      </div>
      <div id="workDiv" className="py-5">
        <Work />
      </div>
    </div>
  );
}

export default Home;
