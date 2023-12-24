import React, { useContext, useEffect } from "react";
import AppointmentAdd from "./assets/components/form/AppointmentAdd";
import AllAppointment from "./assets/components/appointments/AllAppointment";
import axios from "axios";
import mainContext from "./context/mainContext";
const App = () => {
  const { setAppointments } = useContext(mainContext);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/user/getAppointment"
        );
        if (data) {
          setAppointments(data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <AppointmentAdd />
      <AllAppointment />
    </>
  );
};

export default App;
