import React from "react";
import { Table, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";

const AppointmentDetails = () => {
  const token = sessionStorage.getItem("token");
  const [appointment, getAppointment] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:4000/admin_appointment", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log("this is data", data);
      getAppointment(data);
    };
    getData();
  }, [token]);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>HealthCard #</th>
            <th>Doctor Name</th>
            <th>Appointment Date & Time</th>
            <th>Appointment Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointment.length > 0 &&
            appointment.map((info) => (
              <tr>
                <td>{info.patient_id}</td>
                <td>{info.doctor_name}</td>
                <td>{info.appointment_date_time}</td>
                <td>{info.type_of_appointment}</td>
                <td>{info.appointment_status}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AppointmentDetails;
