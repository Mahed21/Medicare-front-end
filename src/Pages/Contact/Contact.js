import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./Contact.css";
const containerStyle = {
  width: "70vh",
  height: "400px",
};

const center = {
  lat: 24.903561,
  lng: 91.873611,
};
const Contact = () => {
  return (
    <div className=" container mt-5">
      <div className="row row-cols-lg-2">
        <div className="">
          <LoadScript googleMapsApiKey="your api code">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          </LoadScript>
        </div>
        <div className="d-flex justify-content-center">
          <div>
            <h3>Contact Us</h3>
            <p>Stay in touch</p>
            <div className="d-flex mt-5">
              <div>
                <i className="fas fa-map-marker-alt contact-icon p-2 rounded-circle"></i>
              </div>
              <div>
                {" "}
                <h5 className="ms-3">
                  Address :
                  <span className="contact-text">
                    road-8 Block-B <br /> Uposhohor Sylhet
                  </span>
                </h5>
              </div>
            </div>

            <div className="d-flex mt-5">
              <div>
                <i className="fas fa-envelope-open-text contact-icon p-2 rounded-circle"></i>
              </div>
              <div>
                {" "}
                <h5 className="ms-3">
                  Email :
                  <span className="contact-text">mahed255261@gmail.com</span>
                </h5>
              </div>
            </div>

            <div className="d-flex mt-5">
              <div>
                <i className="fas fa-address-book contact-icon p-2 rounded-circle"></i>
              </div>
              <div>
                {" "}
                <h5 className="ms-3">
                  Contact :<span className="contact-text">01759704872</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
