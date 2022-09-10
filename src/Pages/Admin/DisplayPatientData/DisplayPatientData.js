import React from "react";

const DisplayPatientData = (props) => {
  const { name, email, patientName, date, time, number } = props.data;
  return (
    <tr>
      <td>L{patientName}</td>
      <td>{email}</td>
      <td>{number}</td>
      <td>
        <button className="btn">Queue</button>
      </td>
    </tr>
  );
};

export default DisplayPatientData;
