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
  // let newObject = JSON.parse(localStorage.getItem("myObject"));
  const navigate = useNavigate();
  const location = useLocation();
  let img = location.state.img;
  let name = location.state.name;
  let time = location.state.time;
  let email = user.email;

  console.log(date);

  const [number, setNumber] = useState({});

  const [patient, setPatient] = useState([]);
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
  // useEffect(() => {
  //   fetch("http://localhost:5000/patient")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const datas = data.filter((data) => data.date === date);
  //       console.log(datas);
  //       setPatient(datas);
  //     });
  // }, []);

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
          navigate("/");
          alert("successfully collected");
        }
      });
  };

  return (
    <div className="">
      {/* <table>
        <tr>
          <th>Patinet Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>
            <button>pendin</button>
          </th>
        </tr>

        {patient.map((patients) => (
          <ViewAllPatient data={patients} key={patients._id}></ViewAllPatient>
        ))}
      </table> */}

      <div className=" pt-5 container">
        <div className="container doctor-profile mt-5">
          <form>
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
              {/* <input
                type="text"
                placeholder="Enter Date 01/12/22"
                className="mb-3"
                onBlur={dateChange}
                required
              /> */}
            </div>

            <br />
            <br />
            <DatePicker
              //value={date}
              onChange={dateChange}
              // className="w-100 datepicker"
            ></DatePicker>
            <br />
            <br />
            <button className="btn" onClick={savePatientInfo}>
              Book{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bookticket;
