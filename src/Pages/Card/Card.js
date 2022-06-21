import React from "react";
import medicine from "../../image/medicine.png";
import medicine1 from "../../image/medicin1.png";
import medicine2 from "../../image/medicine3.png";
import medicine3 from "../../image/medicine4.png";
import banner from "../../image/banner.jpg";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import Contact from "../Contact/Contact";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  const element = <FontAwesomeIcon icon={faMobileRetro} />;
  const AllDoctors = () => {
    navigate("/doctors");
  };
  return (
    <div>
      <div className="doctor-card pt-5 pb-5">
        <div className="container mt-5 mb-3">
          <div className="row gx-5">
            <div className="col-lg-3">
              <div className="card-medicine align-items-end pt-4 ps-2 pe-2">
                <img
                  src={medicine}
                  className="img-fluid rounded-circle"
                  alt=""
                />
                <h4 className="mt-4 text-center">Doctor Of medicine</h4>
                <div className="d-flex justify-content-center">
                  <button className=" btn-lg  btn1" onClick={AllDoctors}>
                    View All Doctor
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card-medicine pt-4 ps-2 pe-2 ">
                <img
                  src={medicine1}
                  className="img-fluid rounded-circle"
                  alt=""
                />
                <h4 className="mt-4 text-center">Doctor Nero Medicine</h4>
                <div className="d-flex justify-content-center">
                  <button className=" btn-lg  btn1" onClick={AllDoctors}>
                    View All Doctor
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card-medicine pt-4 ps-2 pe-2">
                <img
                  src={medicine2}
                  className="img-fluid rounded-circle"
                  alt=""
                />
                <h4 className="mt-4 text-center">
                  Doctor Of Neuro & Spine Surgery
                </h4>
                <div className="d-flex justify-content-center">
                  <button className=" btn-lg  btn1" onClick={AllDoctors}>
                    View All Doctor
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card-medicine pt-4 ps-2 pe-2">
                <img
                  src={medicine3}
                  className="img-fluid rounded-circle"
                  alt=""
                />
                <h4 className="mt-4 text-center">
                  Doctor Of Pediatric Surgery
                </h4>
                <div className="d-flex justify-content-center">
                  <button className=" btn-lg  btn1" onClick={AllDoctors}>
                    View All Doctor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact d-flex justify-content-center align-items-center">
        <div>
          <h3 className="text-center">Competent Medical Senior Care</h3>
          <h5 className="mt-3 text-center">We are always close</h5>
          <h5 className="text-center">
            <button className="mt-5 text-center btn btn-lg">Contact Us</button>
          </h5>
        </div>
      </div>

      <div className="contact-number">
        <div className="container pt-5 pb-5 contact-number-row">
          <div className="row row-cols-lg-2 ">
            <div className="d-flex justify-content-center">
              <h1 className="me-4 icon">{element}</h1>
              <div>
                <h4>Medicare center</h4>
                <h4>+88801578745</h4>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <h1 className="me-4 icon">{element}</h1>
              <div>
                <h4>For Booking Ticket</h4>
                <h4>+88801578745</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Card;
