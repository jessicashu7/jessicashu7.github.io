import './Work.css';
import {WorkRow} from 'components';
import {WORK_INFO} from './WorkInfo.js';
import {Container} from 'react-bootstrap';

function Work() {
  return (
    <Container
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

    </Container>
  );
}

export default Work;
