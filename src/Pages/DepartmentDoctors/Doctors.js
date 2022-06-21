import React, { useEffect, useState } from "react";
import Information from "../VeiwDoctorsInfo/Information";
import "./Doctors.css";

const Doctors = () => {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/doctor")
      .then((res) => res.json())
      .then((data) => setInformation(data));
  }, []);
  return (
    <div>
      <div className="container mt-5 mb-3">
        <div className="row gx-5">
          {information.map((data) => (
            <Information data={data} key={data._id}></Information>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
