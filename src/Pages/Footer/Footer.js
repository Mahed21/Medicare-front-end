import React from "react";
import "./Footer.css";
import logo from "../../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const facebook = <FontAwesomeIcon icon={faAddressBook} />;
  return (
    <div className="footer mt-5 pt-5 pb-5">
      <div className="container">
        <div className="row row-cols-lg-3">
          <div className="d-flex justify-content-center">
            <div className="fa-3x">
              <i className="fab fa-facebook fa-spin icon"></i>
              <i className="fab fa-google fa-spin icon ms-3"></i>
              <i className="fab fa-instagram-square fa-spin icon ms-3"></i>
              <i className="fab fa-twitter fa-spin icon ms-3"></i>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <img src={logo} alt="" />
            <h4 className="ms-2 mt-2">Medicare</h4>
          </div>
          <div className="d-flex justify-content-center">
            <h5>
              Axiomthemes © 2022
              <br />
              All Rights Reserved
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
