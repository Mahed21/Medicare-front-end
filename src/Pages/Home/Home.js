import React from "react";
import "./Home.css";
import img from "../../image/doctor1.png";

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

      {/* banner */}
      <div className="container mt-5">
        <div className="row row-cols-lg-3">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="col mt-5">
            <h4 className="mb-4">Welcome to Medicare Central Hospital</h4>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <br />
            </p>
          </div>
          <div>
            <div className="banner-card mt-5 pt-3 pb-3 text-center">
              <h4>Request Appointment</h4>
            </div>
            <div className="banner-card mt-2 pt-3 pb-3 text-center">
              <h4>Find Doctor</h4>
            </div>
            <div className="banner-card mt-2 pt-3 pb-3 text-center">
              <h4>Find Location</h4>
            </div>
            <div className="banner-card mt-2 pt-3 pb-3 text-center">
              <h4>Emergency services</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
