import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FindingWithDate from "../FindingWithDate/FindingWithDate.js";

const ManagePatient = () => {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    fetch("https://radiant-coast-34791.herokuapp.com/doctor")
      .then((res) => res.json())
      .then((data) => setInformation(data));
  }, []);
  return (
    <div className="container">
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Doctor Name</th>
              <th scope="col">Date</th>
              <th scope="col">Details</th>
            </tr>
          </thead>

          <tbody>
            {information.map((data) => (
              <FindingWithDate data={data} key={data._id}></FindingWithDate>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePatient;
