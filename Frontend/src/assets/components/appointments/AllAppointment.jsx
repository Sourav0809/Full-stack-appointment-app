import React, { useContext } from "react";
import Appointment from "./Appointments";
import mainContext from "../../../context/mainContext";
import "./AllAppointments.css";
const AllAppointment = () => {
  const { appointments } = useContext(mainContext);
  console.log(appointments);
  return (
    <div className="all-appoinments-container">
      {appointments &&
        appointments.map((val) => {
          return <Appointment val={val} key={val.id} />;
        })}
    </div>
  );
};

export default AllAppointment;
