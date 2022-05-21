import React from "react";
import "./Login.css";
import img from "../image/login-icon.png";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-head pt-5">
      <div className="container login">
        <img src={img} alt="" />
        <div className="input-text">
          <h4 className="mb-4 header">Login</h4>
          <br />
          <input placeholder="Email" type="email" className="mb-3" />
          <br />
          <input placeholder="password" type="Password" className="mb-3" />
          <br />
          <button className="btn">login</button>
          <Link to="/register" className="ms-2">
            Not Regusterd?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
