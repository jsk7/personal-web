import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import LoadingBar from 'react-redux-loading-bar';
import EmailMe from '../EmailMe/index';


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
export default class App extends React.PureComponent {

  render() {
    return (
      <div>
        <EmailMe ui={this.props.ui} uiActions={this.props.uiActions} />
        <Navbar fluid inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLinkContainer to="/" >
                <span>
                    <div className="spin logo">
                      <p>JB</p>
                    </div>
                </span>
              </IndexLinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/code">
                <NavItem eventKey={1} href="#">code.me</NavItem>
              </LinkContainer>
              <NavDropdown eventKey={3} title="contact.me" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} onClick={this.props.uiActions.openModal}>E-mail</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3} href="http://www.linkedin.com/in/juanignaciobiltes">
                    Linkedin
                </MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <LoadingBar className="loading-bar"/>

        <div className="children">
          {this.props.children}
        </div>
      </div>
    );
  }
}


App.propTypes = {
  children: PropTypes.element,
  uiActions: PropTypes.object.isRequired,
  ui: PropTypes.object
};
