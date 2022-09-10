import { DatePicker } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
import "./BookTcket.css";
import moment from "moment";

const Bookticket = () => {
  const [date, setDate] = useState(new Date());
  const { user } = UseAuth();

  const navigate = useNavigate();
  const location = useLocation();

  let name = location.state.name;
  let time = location.state.time;
  let email = user.email;

  console.log(date);

  const [number, setNumber] = useState({});

  const [patientName, setPatientName] = useState([]);
  const numberChange = (e) => {
    setNumber(e.target.value);
  };
  const patintName = (e) => {
    setPatientName(e.target.value);
  };
  const dateChange = (e) => {
    // console.log(e);
    console.log(moment(e._d).format("MMM Do YY"));

    setDate(moment(e._d).format("MMM Do YY"));
  };

  const savePatientInfo = (e) => {
    e.preventDefault();

    const newUser = { name, time, date, number, patientName, email };
    fetch("https://radiant-coast-34791.herokuapp.com/patient", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully collected");
          navigate("/");
        }
      });
  };

  return (
    <div className="">
      <div className=" pt-5 container">
        <div className="container doctor-profile mt-5">
          <form onSubmit={savePatientInfo}>
            <h3>Appointment Form</h3>
            <div className="input-text">
              <input type="text" className="mb-3 w-50" value={name} />
              <br />
              <input
                type="text"
                className="mb-3 w-50"
                placeholder="Enter Your Name"
                onBlur={patintName}
                required
              />
              <br />

              <input
                type="text"
                placeholder="Enter mobile number"
                className="mb-3 w-50"
                onBlur={numberChange}
                required
              />
              <br />
            </div>

            <br />
            <br />

            <DatePicker
              //value={date}
              onChange={dateChange}
              // value={moment(date).format("MMM Do YY")}
              // className="w-100 datepicker"
            ></DatePicker>
            <br />
            <br />
            <input type="submit" value="Book" className="btn" />
            {/* <button className="btn" onClick={savePatientInfo}>
              Book{" "}
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bookticket;
