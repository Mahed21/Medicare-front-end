// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import moment from "moment";

// // import {
// //   DateInput,
// //   DateRangePicker,
// // } from "@progress/kendo-react-dateinputs";
// import { useState } from "react";
// import "./PatientList.css";
// import { DatePicker } from "antd";

// const PatientList = () => {
//   const navigate = useNavigate();
//   const [date, setDate] = useState(new Date());
//   const location = useLocation();
//   let img = location.state.img;
//   let name = location.state.name;
//   let time = location.state.time;
//   const dateChange = (e) => {
//     // console.log(e);
//     // console.log(moment(e._d).format("MMM Do YY"));

//     setDate(moment(e._d).format("MMM Do YY"));
//   };
//   const bookAppointment = () => {
//     navigate("/bookTicket", {
//       state: { name: name, time: time, img: img, date: date },
//     });
//   };
//   return (
//     <div className="patientList">
//       <div>
//         <DatePicker
//           //value={date}
//           onChange={dateChange}
//           // className="w-100 datepicker"
//         ></DatePicker>

//         <br />
//         <br />
//         <button className="btn" onClick={bookAppointment}>
//           Book Appointment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PatientList;
