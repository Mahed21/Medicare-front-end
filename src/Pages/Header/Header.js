import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import UseAuth from "../../Context/UseAuth";

import "./Header.css";

const Header = () => {
  const { user, Logout } = UseAuth();

  return (
    <div>
      <Navbar bg="white" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home">Medicare</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="navbar-link">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="navbar-link">
                About Us
              </Nav.Link>
              <Nav.Link href="#link" className="navbar-link">
                Medical Services
              </Nav.Link>
              <Nav.Link href="#link" className="navbar-link">
                Doctor
              </Nav.Link>
              <Nav.Link href="#link" className="navbar-link">
                News
              </Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Link href="#home" className="navbar-link">
                Contact Us
              </Nav.Link>
              {user.email ? (
                <Nav.Link href="/login">
                  <button className="btn" onClick={Logout}>
                    LogOut
                  </button>
                </Nav.Link>
              ) : (
                <Nav.Link href="/login">
                  <button className="btn">Login</button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
