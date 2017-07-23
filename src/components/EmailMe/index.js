import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {  Modal, Button, Col, Image } from 'react-bootstrap';


export default class EmailMe extends React.PureComponent {
  render() {
    return (
      <Modal show={this.props.ui.openModal} onHide={this.props.uiActions.closeModal} className="modal-position">
        <Modal.Header closeButton>
          <div className="center">
            <Modal.Title>Email.Me</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Col lg={4} md={4} sm={4} xs={4}>
            <a className="no-style"
               href={`https://mail.google.com/mail/?view=cm&fs=1&to=${mail.address}&su=${mail.subject}&body=${mail.body}`}>
            <div className="mail-logo">
              <Image responsive src={require("../../icons/logo_gmail.png")} />
            </div>
            </a>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <a className="no-style"
               href={`http://compose.mail.yahoo.com/?to=${mail.address}&subject=${mail.subject}&body=${mail.body}`}>
            <div className="mail-logo yahoo">
              <Image responsive src={require("../../icons/logo_yahoo.png")} />
            </div>
            </a>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <a className="no-style"
               href={`https://outlook.live.com/owa/?path=/mail/action/compose&to=${mail.address}&subject=${mail.subject}&body=${mail.body}`}>
            <div className="mail-logo">
              <Image responsive src={require("../../icons/logo_outlook.png")} />
            </div>
            </a>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
            <p className="hr"> ó </p>
            <div className="center">
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={true}
              transitionEnterTimeout={500}
              transitionLeave={true}
              transitionLeaveTimeout={500}
              key={1}>
              {this.props.ui.mailCopied && <p>Mail copiado al portapapeles, use {navigator.platform === 'MacIntel' ? 'CMD + V' : 'CTRL + V'} para pegar</p>}
            </ReactCSSTransitionGroup>
            <input size="30" type="text"
                  className={'mail ' + (this.props.ui.mailCopied ? 'moved-down' : '')}
                  onClick={this.props.uiActions.copyToClipboard}
                  value="juan.biltes@gmail.com" readOnly />
            </div>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <div className="center">
            <Button onClick={this.props.uiActions.closeModal}>Cerrar</Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mail = {
  subject: 'Contacto Web',
  body: 'Hola Juani,',
  address: 'juan.biltes@gmail.com'
};

EmailMe.propTypes = {
  uiActions: PropTypes.object.isRequired,
  ui: PropTypes.object
};
