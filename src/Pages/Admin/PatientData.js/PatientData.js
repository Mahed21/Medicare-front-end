import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./patientdata.css";
import DisplayPatientData from "../DisplayPatientData/DisplayPatientData";

const PatientData = () => {
  const [patient, setPatient] = useState([]);
  const location = useLocation();
  let name = location.state.name;
  let date = location.state.date;

  fetch("https://radiant-coast-34791.herokuapp.com/patient")
    .then((res) => res.json())
    .then((data) => {
      const patientData = data.filter(
        (data) => data.date === date && data.name === name
      );
      setPatient(patientData);
    });
  return (
    <div className="container height-taking">
      <div className="d-flex justify-content-center">
        <h3>Patient List on {date}</h3>
      </div>
      <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">patien tName</th>
              <th scope="col">Email</th>
              <th scope="col">Number</th>
              <th scope="col">status</th>
            </tr>
          </thead>
          <tbody>
            {patient.map((data) => (
              <DisplayPatientData
                data={data}
                key={data._id}
              ></DisplayPatientData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientData;
