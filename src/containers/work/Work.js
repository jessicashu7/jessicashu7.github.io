import './Work.css';
import {WorkRow} from 'components';
import {WORK_INFO} from './WorkInfo.js';
import {Container, Button} from 'react-bootstrap';
import React from 'react';

function Work() {
  const ref = React.createRef();

  return (
    <Container
      ref={ref}
      id="workContainer"
      className="text-center px-5">
      <h2 className="display-4 py-2">
        My Coding Journey
      </h2>
      <h1 className="lead py-2">
        Here all my coding projects/activities, with the most recent on top!
      </h1>
      <hr className="py-4" />
      <br />

      {WORK_INFO.map((rowInfo, _) => {
        return <WorkRow key={rowInfo.id} rowInfo={rowInfo} />;
      })}

      {/* there's also ref.current?.scrollIntoView but it's experimental */}
      <Button
        variant="outline-secondary"
        size="md"
        onClick={() => window.scroll({
          top: (ref.current?.getBoundingClientRect().top ?? -window.scrollY) + window.scrollY,
          left: (ref.current?.getBoundingClientRect().left ?? -window.scrollX) + window.scrollX,
          behavior: 'smooth'
        })}>back to top</Button>
    </Container >
  );
}

export default Work;
