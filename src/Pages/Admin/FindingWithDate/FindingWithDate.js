import { DatePicker } from "antd";
import moment from "moment";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FindingWithDate.css";

const FindingWithDate = (props) => {
  const [date, setDate] = useState(new Date());

  const navigate = useNavigate();

  const dateChange = (e) => {
    // console.log(e);
    console.log(moment(e._d).format("MMM Do YY"));
    setDate(moment(e._d).format("MMM Do YY"));
  };

  const viewDetails = () => {
    navigate("/patientData", { state: { name: name, date: date } });
  };
  const { name } = props.data;
  return (
    <tr>
      <th scope="col">{name} </th>
      <th scope="col">
        {" "}
        <DatePicker
          //value={date}
          onChange={dateChange}
        ></DatePicker>
      </th>
      <th scope="col">
        <button className="btn" onClick={viewDetails}>
          View Details
        </button>
      </th>
    </tr>
  );
};

export default FindingWithDate;
