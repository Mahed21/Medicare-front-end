import React from "react";
import "./Login.css";
import img from "../../image/login-icon.png";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router";
import UseAuth from "../../Context/UseAuth";

const Login = () => {
  let navigate = useNavigate();
  const { googleSignIn, user } = UseAuth();
  if (user) {
    navigate("/");
  }

  return (
    <div className="login-head pt-5">
      <div className="container login">
        <img src={img} alt="" />
        <form>
          <div className="input-text">
            <h4 className="mb-4 header">Login</h4>
            <br />
            <input placeholder="Email" type="email" className="mb-3" />
            <br />
            <input
              type="password"
              placeholder="Enter the Password"
              className="mb-3"
            />
            <br />
            <button className="btn">login</button>
            <Link to="/register" className="ms-2">
              Not Regusterd?
            </Link>
          </div>
        </form>
        <button className="btn mt-2" onClick={googleSignIn}>
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
