import React, { Component } from 'react';
import './Style.css';
// import "../../App.css";
import { Row } from 'react-bootstrap';

class Description extends Component {
  render() {
    return (
      <div className='description-wrapper'>
        <Row className='description-heading'>
          <h1>In need of a junior candidate for your company? </h1>
        </Row>
        <Row className='description'>
          <p>
          Welcome to Junior Board, an organized information panel for recently graduated developers. 
          With all their information and links to different web portals in one location, it's easier to 
          find the junior developer that is right for you!
            </p>
            <p>
            <ul>
              <li>Front-end Software Developers</li>
              <li>Back-end Software Developers</li>
              <li>Full Stack Software Developers</li>
              <li>UI/UX Designer</li>
              <li>Data Analist</li>
              <li>Program Managers</li>
              <li>DevOps Engineers</li>
              <li>And more...</li>
            </ul>
          </p>
        </Row>
      </div>
    );
  }
}

export default Description;
