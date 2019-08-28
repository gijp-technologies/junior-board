import React, { Component } from 'react';
import './Style.css';
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
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent. wef uhepruoshe ru hgseur guoser oesiorh
            oiawhruoi gouiaw.
            </p>
            <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent. wef uhepruoshe ru hgseur guoser oesiorh
            oiawhruoi gouiaw.
          </p>
        </Row>
      </div>
    );
  }
}

export default Description;
