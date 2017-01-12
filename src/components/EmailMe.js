import React, { PropTypes } from 'react';
import {  Modal, Button, Col, Image, Grid } from 'react-bootstrap';


export default class EmailMe extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
      <Modal show={this.props.ui.openModal} onHide={this.props.uiActions.closeModal} >
        <Modal.Header closeButton>
          <Modal.Title>Email.Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col lg={4} md={4} sm={4} xs={4}>
            <a className="no-style"
               href={`https://mail.google.com/mail/?view=cm&fs=1&to=${mail.address}&su=${mail.subject}&body=${mail.body}`}>
            <div className="mail-logo">
              <Image responsive src="../icons/logo_gmail.png" />
            </div>
            </a>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <a className="no-style"
               href={`http://compose.mail.yahoo.com/?to=${mail.address}&subject=${mail.subject}&body=${mail.body}`}>
            <div className="mail-logo yahoo">
              <Image responsive src="../icons/logo_yahoo.png" />
            </div>
            </a>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <a className="no-style"
               href={`https://outlook.live.com/owa/?path=/mail/action/compose&to=${mail.address}&subject=${mail.subject}&body=${mail.body}`}>
            <div className="mail-logo">
              <Image responsive src="../icons/logo_outlook.png" />
            </div>
            </a>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
            <hr />
            <h4>Copia mi e-mail</h4>
            <h4>Tooltips in a modal</h4>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.uiActions.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

const mail = {
  subject: 'Contacto Web',
  body: 'Hola Juani,',
  address: 'juan.biltes@gmail.com'
}

EmailMe.propTypes = {
  uiActions: PropTypes.object.isRequired,
  ui: PropTypes.object
}
