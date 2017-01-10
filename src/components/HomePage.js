import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Col, Row} from 'react-bootstrap';


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
      <Row>
      <Col lg={1} md={1} sm={1} xsHidden></Col>
      <Col lg={10} md={10} sm={10} xs={12}>
      <div className="border left">
      <div className="border top">
      <div className="border right">
      <div className="border bottom">
        <Col lg={2} md={2} sm={2} xs={2}>
          <div className="left">
            <img className="hand" src="../icons/hand-leftside-v2.jpg" />
          </div>
        </Col>
        <Col lg={8} md={8} sm={8} xs={8}>

            <div className="central">
              <h1>@futurejuan</h1>
              <h4>Some some catchy phrase</h4>
              <p>hola<br />s<br />a<br />c</p>
            </div>

        </Col>
        <Col lg={2} md={2} sm={2} xs={2}>
          <div className="right">
            <img className="hand" src="../icons/hand-rightside-v2.jpg" />
          </div>
        </Col>
        </div>
        </div>
        </div>
        </div>
      </Col>
      <Col lg={1} md={1} sm={1} xsHidden></Col>

      </Row>

      <div className="footer">
        <img src="../icons/legs-size3.jpg" />
      </div>
    </div>
    </ReactCSSTransitionGroup>
  );
};

export default HomePage;
