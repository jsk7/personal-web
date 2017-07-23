import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Col, Row, Grid} from 'react-bootstrap';


const Home = () => {
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
        <img className="profile" src={require("../../icons/profile-size4-v2.jpg")} />
      </div>
      <Grid>
        <Row>
          <Col lg={1} md={1} sm={1} xsHidden />
          <Col lg={10} md={10} sm={10} xs={12}>
          <div className="border left">
          <div className="border top">
          <div className="border right">
          <div className="border bottom">
            <Col lg={2} md={2} sm={2} xs={2}>
              <div className="left">
                <img className="hand" src={require("../../icons/hand-leftside-v2.jpg")} />
              </div>
            </Col>
            <Col lg={8} md={8} sm={8} xs={8} className="scroll">
              <div className="central">
                <h1 className="title">Front-End Dev</h1>
                <h4>Código, diseño y usabilidad</h4>
                <hr />
                <Row>
                  <Col lg={8} md={8} sm={8} xs={12}>
                    <Row>
                      <h1 className="description">Sobre mi:</h1>
                      <p>
                        Mi nombre es Juan Ignacio Biltes, desarrollador creativo de front-end enfocado
                        en crear soluciones atractivas e intuitivas para el usuario mediante código y
                        estructuras performantes.
                        <br />
                        Autodidacta por naturaleza, constantemente busco nuevas y mejores herramientas
                        que me permitan crear soluciones superadoras, y si es en equipo mejor aún,
                        “dos cabezas piensan mejor que una”.
                      </p>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={6} xs={12}>
                        <h2 className="sub">Skills</h2>
                        <ul>
                          <li>HTML5, SASS, JS</li>
                          <li>React, Redux</li>
                          <li>Mocha, chai, sinon</li>
                          <li>Java, SQL, noSQL</li>
                        </ul>
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={12}>
                        <h2 className="sub">Herramientas</h2>
                        <ul>
                          <li>Git</li>
                          <li>CI</li>
                          <li>NPM, Webpack</li>
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <p>
                        Actualmente me encuentro en tercer año de la carrera de Ingeniería en Sistemas
                        de Información en la Universidad Tecnológica Nacional y en mi tiempo
                        libre podrás encontrarme haciendo algún tipo de deporte o
                        con mi hobby de fotografia.
                      </p>
                    </Row>
                  </Col>
                  <Col lg={4} md={4} sm={4} xs={12}>
                    <Row className="pad">
                      <Col xsHidden><div className="vertical-line" /></Col>
                      <h1 className="description">Detalles:</h1>
                      <h2 className="sub">Nombre:</h2>
                      <h3 className="data">Juan Ignacio Biltes</h3>
                      <h2 className="sub">Edad:</h2>
                      <h3 className="data">23</h3>
                      <h2 className="sub">Estudios:</h2>
                      <h3 className="data">Ingeniería en Sistemas de Información</h3>

                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={2} md={2} sm={2} xs={2}>
              <div className="right">
                <img className="hand" src={require('../../icons/hand-rightside-v2.jpg')} />
              </div>
            </Col>
            </div>
            </div>
            </div>
            </div>
          </Col>
          <Col lg={1} md={1} sm={1} xsHidden />
        </Row>
      </Grid>
      <div className="footer">
        <img src={require("../../icons/legs-size3.jpg")} />
      </div>
    </div>
    </ReactCSSTransitionGroup>
  );
};

export default Home;
