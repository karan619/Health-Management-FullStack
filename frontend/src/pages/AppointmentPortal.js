import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import parseJwt from "../helper/authHelper";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";

const BookAppointment = () => {
  let history = useHistory();
  const token = sessionStorage.getItem("token");
  const user = parseJwt(token).username;
  const [appointmentData, setAppointmentData] = useState({
    HCN: "",
    date: "",
    appointment: "",
  });
  const [message, setMessage] = useState("");

  const logOut = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("token");
    history.push("/patient-login");
  };

  const handleInputChange = (key, val) => {
    setAppointmentData({ ...appointmentData, [key]: val });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("this is ", appointmentData.date);

    setMessage("");
    if (
      appointmentData.HCN === "" ||
      appointmentData.date === "" ||
      appointmentData.appointment === ""
    ) {
      setMessage("Fill in required fields");
      return;
    }
    await fetch("http://localhost:4000/create_appointment", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        patient_id: appointmentData.HCN,
        appointment_date_time: appointmentData.date,
        type_of_appointment: appointmentData.appointment,
      }),
    }).then((response) => {
      if (response) {
        if (response.status === 200) {
          setMessage(
            "Thank you for booking your appointment. We will be in touch shortly."
          );
        } else {
          setMessage("Something went wrong. Please resubmit.");
        }
      }
    });
    setAppointmentData({
      HCN: "",
      date: "",
      appointment: "",
    });
  };
  return (
    <>
      <Container className="appointment-portal">
        <Row>
          <Col>
            <h1> Welcome: {user}</h1>
            <h1>
              To book an appointment with us please complete the following:{" "}
            </h1>
          </Col>
        </Row>

        <Button onClick={logOut}>LogOut</Button>

        <form className="form">
          <Row>
            <Col>
              <label htmlFor="HCN">Health Card Number:</label>
              <input
                type="text"
                id="name"
                name="HCN"
                value={appointmentData.HCN}
                onChange={(e) => handleInputChange("HCN", e.target.value)}
                placeholder="0000-000-000-XX"
                required
              />
            </Col>
            <Col>
              <label htmlFor="date">Date of Appointment:</label>

              <input
                type="date"
                id="name"
                name="date"
                value={appointmentData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                required
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <label htmlFor="appointment">Reason for Appointment</label>
              <textarea
                rows="3"
                cols="30"
                type="text"
                id="name"
                name="data"
                value={appointmentData.appointment}
                onChange={(e) =>
                  handleInputChange("appointment", e.target.value)
                }
                required
              ></textarea>
            </Col>
          </Row>

          <Row>
            <Col>
              <input
                type="submit"
                value="Submit"
                onClick={onSubmit}
                className="button-contact"
              />
            </Col>
          </Row>
        </form>
        <p>{message}</p>
      </Container>
    </>
  );
};

export default BookAppointment;
