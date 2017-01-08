import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Col} from 'react-bootstrap';


const HomePage = (props) => {
  return (
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={300}
      transitionEnter={true}
      transitionEnterTimeout={300}
      transitionLeave={true}
      transitionLeaveTimeout={300}
      key={1}>
    <div className="home">
      <div className="banner">
        <img className="profile" src="../icons/profile-size4-v2.jpg" />
      </div>
      <Col lg={12}>
        <h1>@futurejuan</h1>
        <h4>Some some catchy phrase</h4>
      </Col>
    </div>
    </ReactCSSTransitionGroup>
  );
};

export default HomePage;
