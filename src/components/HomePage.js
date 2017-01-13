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
            <h1 className="title">Front-End Dev</h1>
            <h4>Código, diseño y usabilidad</h4>
            <hr />
            <Row>
              <Col lg={8} md={8} sm={8} xs={12}>
                <Row>
                  <h1 className="description">Sobre mi:</h1>
                  <p>
                    Soy <span>Juan Ignacio Biltes</span>, un desarrollador creativo
                    de front-end que le encanta crear aplicaciones intuitivas, atractivas
                    y de calidad para todos los dispositivos que existen hoy en día.
                    <br />
                    Creo que una buena experiencia está en los detalles y soy muy dedicado
                    con mi trabajo, simplemente me encanta realizar aplicaciones
                    y trabajar con personas que compartan el mismo sentimiento
                  </p>
                </Row>
                <Row>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <h2 className="sub">Skills</h2>
                    <ul>
                      <li>HTML5, SASS, JS</li>
                      <li>React, Redux</li>
                      <li>Java, SQL, noSQL, REST</li>
                    </ul>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <h2 className="sub">Herramientas</h2>
                    <ul>
                      <li>Git</li>
                      <li>Atom</li>
                      <li>NPM, Webpack</li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <p>
                    Soy estudiante en tercer año de la carrera de Ingeniería en Sistemas
                    de Información en la Universidad Tecnológica Nacional y en mi tiempo
                    libre podes encontrarme seguramente haciendo algún tipo de deporte o
                    sacando fotos en algún parque
                  </p>
                </Row>
              </Col>
              <Col lg={4} md={4} sm={4} xs={12}>
                <Row className="pad">
                  <div className="vertical-line" />
                  <h1 className="description">Detalles:</h1>
                  <h2 className="sub">Nombre</h2>
                </Row>
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
