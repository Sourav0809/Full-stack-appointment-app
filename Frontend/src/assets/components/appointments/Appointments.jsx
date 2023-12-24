import React, { useContext } from "react";
import mainContext from "../../../context/mainContext";
import axios from "axios";
import "./Appointment.css";

const Appointment = ({ val }) => {
  const { delteAppointment, setEditAppointments, setIsEditAppointment } =
    useContext(mainContext);

  // for delete any appointment
  const deleteAppointmentHandeler = async () => {
    try {
      const { data } = await axios.delete(
        "http://localhost:4000/user/deleteAppointment",
        { data: { id: val.id } }
      );
      console.log(data);
      delteAppointment(val.id);
    } catch (error) {
      console.log(error);
    }
  };

  // for edit any appointment
  const appointmentEditHandeler = () => {
    setEditAppointments({
      name: val.name,
      email: val.email,
      id: val.id,
      phone: val.phone,
    });
    setIsEditAppointment(true);
  };

  return (
    <div className="appointment-container">
      <div>
        <h1>{val.name}</h1>
      </div>
      <div>
        <h1>{val.email}</h1>
      </div>
      <div>
        <h1>{val.phone}</h1>
      </div>
      <button
        onClick={appointmentEditHandeler}
        className="appointment-edit-btn"
      >
        Edit
      </button>
      <button
        onClick={deleteAppointmentHandeler}
        className="appointment-delete-btn"
      >
        Delete
      </button>
    </div>
  );
};

export default Appointment;
