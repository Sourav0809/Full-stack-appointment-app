import React, { useContext } from "react";
import Appointments from "./Appointments";
import mainContext from "../../../context/mainContext";

const AllAppointment = () => {
  const { appointments } = useContext(mainContext);
  console.log(appointments);
  return (
    <div>
      {appointments &&
        appointments.map((val) => {
          return <Appointments val={val} key={val.id} />;
        })}
    </div>
  );
};

export default AllAppointment;
