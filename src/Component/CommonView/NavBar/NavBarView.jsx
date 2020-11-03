import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
export default class NavBarView extends Component {
  render() {
    return (
      <Navbar
        className="navbar-react"
        bg="transparent"
        variant="light"
        fixed="top"
        expand="lg"
        // size="lg"
      >
        <Navbar.Brand>
          {' '}
          <NavLink
            className="nav-link"
            activeClassName="link-active"
            exact="true"
            to="/home"
          >
            <small>Bánh Mì</small> Cô Vui
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" mr-auto"></Nav>
          <Nav>
            <NavLink
              className="nav-link"
              activeClassName="link-active"
              to="/homepage"
            >
              HOME
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="link-active"
              to="/menu"
            >
              MENU
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="link-active"
              to="/menu"
            >
              LOCATION
            </NavLink>{' '}
            <NavLink
              className="nav-link"
              activeClassName="link-active"
              to="/menu"
            >
              CONTACT
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
