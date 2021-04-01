import './Work.css';
import {WorkRow} from 'components';
import {WORK_INFO, FilterType} from './WorkInfo.js';
import {Container, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {animated, useSpring, config} from 'react-spring';
import {AnimatedButton} from 'components/animated-components';
import {useInView} from 'react-intersection-observer'; // might not work in really old browsers?

function Work() {
  const containerRef = React.createRef();

  const {ref, inView, entry} = useInView({
    threshold: 0,
    delay: 500
  });

  const [filter, setFilter] = useState(FilterType.ALL);
  const [show, setShow] = useState(false);

  const filteredEntries = WORK_INFO
    .filter((rowInfo, _) => filter === FilterType.ALL || rowInfo.type === filter);
  const [entries, setEntries] = useState(filteredEntries);

  const handleChange = (key) => {
    setFilter(FilterType[key]);
    setShow(false);
  };

  const {opacity, pointerEvents} = useSpring({
    to: show ? {opacity: 1, pointerEvents: "auto"} : {opacity: 0, pointerEvents: "none"},
    config: config.default,
    onRest: () => {
      if (!show && inView) {
        setEntries(filteredEntries);
        setShow(true);
      }
    },
  });

  useEffect(() => {
    if (inView && !show) {
      setShow(true);
    } else if (!inView && show) {
      setShow(false);
    }
  }, [inView]);

  return (
    <Container
      ref={containerRef}
      id="workContainer"
      className="text-center px-5">
      <h2 className="display-4 py-2">
        My Coding Journey
      </h2>
      <h1 className="lead py-2">
        Here all my coding projects/activities, with the most recent on top!
      </h1>
      <hr className="py-4" />

      <ToggleButtonGroup type="radio" name="filter By" defaultValue={Object.keys(FilterType)[0]} onChange={handleChange} aria-label="Filter work">
        {Object.entries(FilterType).map(([key, value]) => {
          return <ToggleButton key={key} value={key} variant="outline-secondary" active={true}>{value}</ToggleButton>;
        })}
      </ToggleButtonGroup>

      <br />

      <div ref={ref}>
        <animated.div style={{opacity: opacity, pointerEvents: pointerEvents}}>
          {entries
            .map((rowInfo, _) => {
              return <WorkRow key={rowInfo.id} rowInfo={rowInfo} />;
            })}
        </animated.div>

        {/* there's also ref.current?.scrollIntoView but it's experimental */}
        {entries.length > 1 ?
          (<AnimatedButton
            variant="outline-secondary"
            size="md"
            onClick={() => window.scroll({
              top: (containerRef.current?.getBoundingClientRect().top ?? -window.scrollY) + window.scrollY,
              left: (containerRef.current?.getBoundingClientRect().left ?? -window.scrollX) + window.scrollX,
              behavior: 'smooth'
            })}
            style={{opacity: opacity}}>
            back to top
          </AnimatedButton>)
          : null}
      </div>
    </Container >
  );
}

export default Work;
