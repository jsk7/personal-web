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
              <h1>Juan Ignacio Biltes</h1>
              <h4>Desarrollador Front-End</h4>
              <hr />
              <p>
                Aptitudes:
              </p>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <h4>Modulo 1</h4>
                  <ul>
                    <li>Semantic markup</li>
                    <li>HTML standards mode and quirks mode</li>
                    <li>HTML fundamentals
                      <ul>
                        <li>Classes and IDs</li>
                      </ul>
                    </li>
                    <li>
                    CSS fundamentals
                      <ul>
                        <li>Selectors</li>
                        <li>Resets and normalizers</li>
                        <li>The box model
                          <ul>
                          <li><code>border-box</code></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>Mobile design principles</li>
                    <li>Desktop design principles</li>
                    <li>
                    JavaScript fundamentals
                      <ul>
                        <li>Variables and functions</li>
                        <li>Data structures</li>
                        <li>Object-oriented JavaScript</li>
                        <li>First-class functions</li>
                        <li>Scopes and closures</li>
                        <li>Types and grammar</li>
                        <li>Node.js basics</li>
                      </ul>
                    </li>
                    <li>Test-driven JavaScript</li>
                    <li>Version control</li>
                  </ul>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <h4>Modulo 2</h4>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <h4>Modulo 3</h4>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <h4>Modulo 4</h4>
                </Col>
              </Row>
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
