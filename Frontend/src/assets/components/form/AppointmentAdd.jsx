import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./AppointmentAdd.css";
import mainContext from "../../../context/mainContext";

const AppointmentAdd = () => {
  const { setNewAppointment, editAppointment, isEditAppointment } =
    useContext(mainContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  if (editAppointment) {
    useEffect(() => {
      setName(editAppointment.name || "");
      setEmail(editAppointment.email || "");
      setPhone(editAppointment.phone || "");
    }, [editAppointment]);
  }
  const onSubmitHandeler = async (e) => {
    e.preventDefault();

    try {
      if (isEditAppointment) {
        const submitedData = {
          id: editAppointment.id,
          name,
          email,
          phone,
        };

        const { data } = await axios.patch(
          "http://localhost:4000/user/editAppointment",
          submitedData
        );
        console.log(data);
        setNewAppointment(submitedData);
      } else {
        let submitedData = {
          name,
          email,
          phone,
        };
        const { data } = await axios.post(
          "http://localhost:4000/user/addAppointment",
          submitedData
        );
        if (data) {
          submitedData.id = data.id;
          setNewAppointment(submitedData);
        }
      }
      setEmail("");
      setName("");
      setPhone("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="appointment-add-form" onSubmit={onSubmitHandeler}>
      <div className="appointment-child-div">
        <div className="child-div-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name .. "
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="child-div-2">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            placeholder="Enter Email .. "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="child-div-3">
          <label htmlFor="name">Number</label>
          <input
            type="number"
            placeholder="Enter Phone .. "
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="btn-div">
          <button type="submit" className="form-btn">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AppointmentAdd;
