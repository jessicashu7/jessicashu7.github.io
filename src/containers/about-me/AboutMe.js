import './AboutMe.css';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {useTrail, to} from 'react-spring';
import React, {useState, useEffect, useCallback} from 'react';
import {useInView} from 'react-intersection-observer'; // might not work in really old browsers?
import {AnimatedButton} from 'components/animated-components';
import {Color} from 'Colors';

function AboutMe() {

  const aboutMeLinks = [
    {
      href: "https://www.linkedin.com/in/jessicashu7",
      src: "images/linkedin-logo.png",
      alt: "linkedin"
    },
    {
      href: "https://github.com/jessicashu7",
      src: "images/github-logo.png",
      alt: "github"
    }
  ];

  /**
   * I want to trigger animation to START OVER every time view comes in viewport (not first render). Most examples I saw on docs show animation 
   * toggling animation from one state to another (aka. a->b->a->b etc. but I want to trigger a->b at certain times)
   * Tried (and failed) couple options for doing this
   * 1. with reset:true.
   *    const {x} = useSpring({from: {x: 0}, x: 1, reset: true, config: config});
   *    will restart animation every render of component (but includes first render)
   * 2. without reset:true.
   *    const {x} = useSpring({from: {x: 0}, x: someState ? 1 : 0, config: config});
   *    will change animation only when props in useSpring change (this is like animating betweeen states, but I want to restart animation)
   * 3. set x in useSpring based on inView, but that means it will animate when going out of view. 
   *    const {x} = useSpring({from: {x: 0}, x: inView ? 1 : 0, config: config});
   *    if inView goes from true->false->true quickly, full animation will not be shown
   * -- below are solutions --
   * -- but functions such as reset(), set(), start() are not really explicitly laid out in the docs (not sure if it's recommended) -- 
   * 4. use x.reset() manually will restart the animation
   *    <div onClick={() => {o.reset(); x.reset();}}>toggle</div>
   * 5. like 2, but add the onRest function to reset state to be initial state after animation is done (so animation always restarts) 
   *    const {x} = useSpring({x: triggerAnim ? 1 : 0, onRest: () => {x.set(0); setTriggerAnim(false);}, config: config});
   *    where triggerAnim is set true when inView becomes true (but never set to false). This works if we want the animation to start over 
   *    when inView becomes true IF animation is currently NOT going. 
   * 6. [used] like 3, but call x.set(0) when inView becomes false
   *    const {x} = useSpring({x: inView ? 1 : 0, config: config});
   *    This works if we want the animation to start over when inView becomes true (even if animation is currently going)
   * 7. get springRef and call start with updated values when inView becomes true, call set({}) when inView becomes false
   *    const [{x}, springRef] = useSpring(() => ({to: {x: 0},config: config})); springRef.start({from: {x: 0}, to: {x: 1}, delay: 1000});
   *    When you use ref, the animation needs to manually started?
   *    Pro of this over 5/6 is that you can call set({}) with multiple values inside {}, as opposed to calling x.set(), y.set(),...etc
   *    But I find it confusing to need to pass in props to start, so I went with 6
   */

  const {ref, inView, entry} = useInView({
    /* Optional options */
    threshold: 1, // inView is true when 100% of view with ref is shown in viewport
  });

  const [animating, setAnimating] = useState(false);
  const trail = useTrail(aboutMeLinks.length, {to: {x: inView ? 1 : 0}, delay: 300, onStart: () => setAnimating(true), onRest: () => setAnimating(false), config: {mass: 10, tension: 280, friction: 120}});

  useEffect(() => {
    if (!inView) {
      trail.map(({x}, _) => {
        x.set(0);
      });
      setAnimating(false);
    }
  }, [inView]);

  const animatedButtonStyles = useCallback((x) => {
    const rotateSpring = x.to({
      range: [0, 0.2, 0.4, 0.6, 0.8, 1],
      output: [0, -5, 5, -5, 5, 0]
    });
    const jumpSpring = x.to({
      range: [0, 0.3, 0.7, 1],
      output: [0, 30, 30, 0]
    });
    const colorSpring = x.to({
      range: [0, 0.4, 0.6, 1],
      output: [0, 1, 1, 0]
    });

    const baseStyles = {
      transform: to([rotateSpring, jumpSpring], (rotateSpring, jumpSpring) => {
        return `rotate(${rotateSpring}deg) translate(0px, -${jumpSpring}px)`;
      }),
      borderColor: colorSpring.to({range: [0, 1], output: [Color.lightGreyTransparent, Color.lightGrey]}),
      borderWidth: colorSpring,

    };
    return animating ? {
      ...baseStyles,
      backgroundColor: colorSpring.to({range: [0, 1], output: [Color.whiteGreyTransparent, Color.whiteGrey]})
    } : baseStyles;
  }, [animating]);

  return (
    <Container
      id="aboutMeContainer"
      className="text-center"
    >
      <Row className="align-items-center">
        <Col md={6}>
          <Image id="profile" src="images/websitepfpic.png" alt="My Picture" roundedCircle />
          <br />
          <br />
        </Col>

        <Col md={6} className="pt-2">
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

          <div ref={ref}>
            {
              trail.map(({x}, ind) => {
                const item = aboutMeLinks[ind];
                const animatedStyles = animatedButtonStyles(x);
                return (
                  <AnimatedButton
                    key={`aboutme-${ind}`}
                    style={{...animatedStyles, marginLeft: 7, marginRight: 7}}
                    href={item.href}
                    target="_blank"
                    variant="outline-light">
                    <Image
                      className="logo"
                      src={item.src}
                      alt={item.alt} />
                  </AnimatedButton>
                );
              })
            }
          </div>
        </Col>
      </Row >
    </Container >
  );
}

export default AboutMe;
