import React from "react";

const Information = (props) => {
  const { name, img, time } = props.data;

  return (
    <div className="col-lg-3 mb-2">
      <div className="card-medicine align-items-end pt-4 ps-2 pe-2">
        <img src={img} className="img-fluid rounded-circle" alt="" />
        <h4 className="mt-4 text-center">{name}</h4>
        <h4 className="mt-4 text-center">Time:{time}</h4>
        <div className="d-flex justify-content-center">
          <button className=" btn-lg  btn1">Book Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default Information;
