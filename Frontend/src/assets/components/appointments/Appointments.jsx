import React, { useContext } from "react";
import mainContext from "../../../context/mainContext";
import axios from "axios";

const Appointments = ({ val }) => {
  const { delteAppointment, setEditAppointments, setIsEditAppointment } =
    useContext(mainContext);

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
    <div>
      <div>{val.name}</div>
      <div>{val.email}</div>
      <div>{val.phone}</div>
      <button onClick={appointmentEditHandeler}>Edit</button>
      <button onClick={deleteAppointmentHandeler}>Delete</button>
    </div>
  );
};

export default Appointments;
