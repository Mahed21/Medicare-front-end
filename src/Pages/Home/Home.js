import React from "react";
import "./Home.css";

import img1 from "../../image/patient.png";
import Card from "../Card/Card";

const Home = () => {
  return (
    <div>
      <div className="background mt-1">
        <div className="home-card ms-5">
          <div className="p-5">
            <h3>We Take Care Of Your Healty Health</h3>
            <p className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
              <br />
              ad minim veniam, quis nostrud exercitation ullamco <br />
              laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
      </div>
      {/* description */}
      <div className="container description">
        <div className="row row-cols-lg-2 description-card">
          <div>
            <img src={img1} className="img-fluid w-100" alt="" />
          </div>
          <div className="text-center  description-text mt-5">
            <h1>Professional Care You </h1>
            <h1>Can Trust</h1>
            <h3 className="mt-3">We Provide Care</h3>
            <h5 className="mt-5">
              We trace our success as a company to the simple and enduring
              philosophy that aging is a gift. The wealth of knowledge and
              experience that comes with age is a gift to the individual & the
              family.
            </h5>
            <h5>
              We work to provide an environment that supports the whole person
              mind and heart, as well as body.
            </h5>
          </div>
        </div>
      </div>
      <Card></Card>
    </div>
  );
};

export default Home;
