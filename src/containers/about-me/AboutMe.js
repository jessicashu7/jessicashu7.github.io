import './AboutMe.css';

function AboutMe() {
  return (
    <div
      id="aboutMeContainer"
      className="container text-center">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            id="profile"
            src="images/websitepfpic.png"
            alt="My Picture"
            className="rounded-circle" />
          <br />
          <br />
        </div>

        <div className="col-md-6 pt-2">
          <h2 className="display-4">
            Hey, here's a little about me!
          </h2>
          <br />
          <br />

          <p className="lead pb-5">
            I grew up in San Jose, California and I graduated with a degree in Computer Science at University of California, Irvine.
            Coding is my passion, and I love to be constantly learning new programming skills and gaining knowledge in various areas within Computer Science.
            If you would like to read about my coding journey, scroll down!
            My other hobbies include running/exercising, watching movies (especially action and sci-fi/fantasy), and reading.
            Fun facts—I’m a huge Potterhead and I have a fraternal twin sister!
          </p>

          <hr className="bg-secondary" />
          <a
            href="https://www.linkedin.com/in/jessicashu7"
            target="_blank"
            className="btn btn-light logoButton">
            <img
              className="logo"
              src="images/linkedin-logo.png"
              alt="linkedin" />
          </a>
          <a
            href="https://github.com/jessicashu7"
            target="_blank"
            className="btn btn-light logoButton">
            <img
              className="logo"
              src="images/github-logo.png"
              alt="github" />
          </a>
        </div>
      </div>
    </div>

  );
}

export default AboutMe;
