import React from "react";
import { useNavigate } from "react-router";

const Information = (props) => {
  const navigate = useNavigate();
  const { name, img, time } = props.data;
  const bookTicket = () => {
    // const myObject = {
    //   name: name,
    //   time: time,
    // };

    // window.localStorage.setItem("myObject", JSON.stringify(myObject));
    // navigate("/bookTicket");
    navigate("/bookTicket", { state: { name: name, time: time, img: img } });
  };

  return (
    <div className="col-lg-3 mb-2">
      <div className="card-medicine align-items-end pt-4 ps-2 pe-2">
        <img src={img} className="img-fluid rounded-circle" alt="" />
        <h4 className="mt-4 text-center">{name}</h4>
        <h4 className="mt-4 text-center">Time:{time}</h4>
        <div className="d-flex justify-content-center">
          <button className=" btn-lg  btn1" onClick={bookTicket}>
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
