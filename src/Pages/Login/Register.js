import React from "react";
import { Link } from "react-router-dom";
import img from "../../image/login-icon.png";

const Register = () => {
  return (
    <div className="login-head pt-5">
      <div className="container login">
        <img src={img} alt="" />
        <div className="input-text">
          <h4 className="mb-4 header">Login</h4>
          <br />
          <input placeholder="Name" type="text" className="mb-3" />
          <br />
          <input placeholder="Email" type="email" className="mb-3" />
          <br />
          <input placeholder="Password" type="Password" className="mb-3" />
          <br />
          <input
            placeholder="Confirm Password"
            type="Password"
            className="mb-3"
          />
          <br />
          <button className="btn">login</button>
          <Link to="/login" className="ms-2">
            Already Regusterd?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
