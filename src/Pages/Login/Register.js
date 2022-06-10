import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
import img from "../../image/login-icon.png";
import { useNavigate } from "react-router";

const Register = () => {
  const { emailPassSignIn } = UseAuth();
  const [email, setEmail] = useState({});
  const [pass, setPass] = useState({});
  const [conPass, setConPass] = useState({});
  const [name, setName] = useState({});
  let navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const handleConPass = (e) => {
    setConPass(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (pass === conPass) {
      emailPassSignIn(email, pass, navigate, name);
    } else {
      alert("Password and Confirm Password is not match");
    }
  };
  return (
    <div className="login-head pt-5">
      <div className="container login">
        <img src={img} alt="" />
        <div className="input-text">
          <h4 className="mb-4 header">Register</h4>
          <br />
          <input
            placeholder="Full Name"
            type="text"
            className="mb-3"
            onBlur={handleName}
          />
          <br />
          <input
            placeholder="Email"
            type="email"
            className="mb-3"
            onBlur={handleEmail}
          />
          <br />
          <input
            placeholder="Password"
            type="Password"
            className="mb-3"
            onBlur={handlePass}
          />
          <br />
          <input
            placeholder="Confirm Password"
            type="Password"
            className="mb-3"
            onBlur={handleConPass}
          />
          <br />
          <button className="btn" onClick={handleRegister}>
            Register
          </button>
          <Link to="/login" className="ms-4">
            Already Regusterd?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
