import React, { useState } from "react";
import mainContext from "./mainContext";
const ContextProvider = (props) => {
  const [appointments, setAppointments] = useState([]);
  const [editAppointment, setEditAppointment] = useState({});
  const [isEditAppointment, setIsEditAppointment] = useState(false);

  // when user add some appointment
  const appointmentSetHandeler = (data) => {
    if (isEditAppointment) {
      const findIndex = appointments.findIndex(
        (val) => val.id === editAppointment.id
      );

      // console.log(findIndex, data);
      setAppointments((prev) => {
        const updatedAppointments = [...prev];
        updatedAppointments[findIndex] = data;
        return updatedAppointments;
      });

      setIsEditAppointment(false);
      setEditAppointment({});
    } else {
      setAppointments((prev) => {
        return [...prev, data];
      });
    }
  };

  // for delete appointment
  const deleteAppointementHandeler = (id) => {
    setAppointments((prev) => {
      return prev.filter((val) => val.id !== id);
    });
  };

  // provider values
  const providerValues = {
    appointments: appointments,
    setAppointments: setAppointments,
    setNewAppointment: appointmentSetHandeler,
    delteAppointment: deleteAppointementHandeler,
    editAppointment: editAppointment,
    setEditAppointments: setEditAppointment,
    isEditAppointment: isEditAppointment,
    setIsEditAppointment: setIsEditAppointment,
  };

  return (
    <mainContext.Provider value={providerValues}>
      {props.children}
    </mainContext.Provider>
  );
};

export default ContextProvider;
