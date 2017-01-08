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
        <LoadingBar className="loading-bar"/>

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
