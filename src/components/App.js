import React, { PropTypes } from 'react';
import { Grid, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import LoadingBar from 'react-redux-loading-bar';


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
export default class App extends React.Component {

  render() {


    return (
      <div>
        <Navbar fluid inverse collapseOnSelect>
          <Navbar.Header>
            <LoadingBar className="loading-bar"/>
            <Navbar.Brand>
              <IndexLinkContainer to="/">
                <div>
                  JB
                </div>
              </IndexLinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/code">
                <NavItem eventKey={1} href="#">code</NavItem>
              </LinkContainer>
              <LinkContainer to="/prints">
                <NavItem eventKey={2} href="#">prints</NavItem>
              </LinkContainer>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>change mode</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>contact.me</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="children">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};
