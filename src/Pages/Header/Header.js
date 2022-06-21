import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import UseAuth from "../../Context/UseAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileRetro, faClock } from "@fortawesome/free-solid-svg-icons";
import logo from "../../image/logo.png";

import "./Header.css";

const Header = () => {
  const { user, Logout } = UseAuth();
  const contact = <FontAwesomeIcon icon={faMobileRetro} />;
  const watch = <FontAwesomeIcon icon={faClock} />;
  //console.log(user);

  return (
    <div>
      <div className="first-navbar pb-2 pt-2">
        <div className="container justify-content-between first-navbar-parent">
          <div>
            <h4>Medicare</h4>
          </div>
          <div className="first-navbar-text">
            <h5>
              <span className="icon">{contact} </span>01759704872
            </h5>
            <h5 className="ms-4 first-nav-email">
              <span className="icon">{watch} </span> Sat-Thu :8AM-10PM
            </h5>
          </div>
        </div>
      </div>

      <Navbar bg="white" expand="lg" className="navbar pt-3 pb-3">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="" alt="" />
            Medicare
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
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
