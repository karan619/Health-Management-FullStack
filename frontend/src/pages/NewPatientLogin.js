import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NewPatientLogin = () => {
  let history = useHistory();
  const [regPatient, setPatient] = useState({
    HCN: "",
    name: "",
    address: "",
    gender: "",
    dob: "",
    email: "",
  });

  const handleInputChange = (key, val) => {
    setPatient({ ...regPatient, [key]: val });
  };

  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    if (
      regPatient.HCN === "" ||
      regPatient.name === "" ||
      regPatient.address === "" ||
      regPatient.gender === "" ||
      regPatient.dob === "" ||
      regPatient.email === ""
    ) {
      setMessage("Fill in required fields");
      return;
    }

    await fetch("http://localhost:4000/register_patient/personal-details", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        HealthCard: regPatient.HCN,
        name: regPatient.name,
        address: regPatient.address,
        gender: regPatient.gender,
        DOB: regPatient.dob,
        Email: regPatient.email,
      }),
    }).then((response) => {
      if (response) {
        if (response.status === 200) {
          localStorage.setItem("HCN", JSON.stringify(regPatient.HCN));
          history.push("/complete-register-patient");

          setMessage(
            "Thank you for booking your appointment. We will be in touch shortly."
          );
        } else {
          setMessage("Something went wrong. Please resubmit.");
        }
      }
    });
    setPatient({
      HCN: "",
      name: "",
      address: "",
      gender: "",
      dob: "",
      email: "",
    });
  };

  return (
    <>
      <section>
        <div>
          <h1 className="bg-secondary">REGISTER NEW PATIENT</h1>
        </div>
      </section>

      <Container className="register-patient">
        <p>{message}</p>
        <form className="form">
          <Row>
            <Col>
              <label htmlFor="HCN">HealthCard:</label>
              <input
                type="text"
                id="name"
                name="HCN"
                value={regPatient.HCN}
                onChange={(e) => handleInputChange("HCN", e.target.value)}
                placeholder="Enter your HealthCard"
                required
              />
            </Col>
            <Col>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={regPatient.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your Name"
                required
              />
            </Col>
            <Col>
              <label htmlFor="address">Address:</label>
              <input
                type="address"
                id="name"
                value={regPatient.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Enter your address"
                required
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <label htmlFor="Sex">Gender</label>
              <input
                type="text"
                id="name"
                value={regPatient.gender}
                onChange={(e) => handleInputChange("gender", e.target.value)}
                placeholder="Enter your SEX"
                required
              />
            </Col>
            <Col>
              <label htmlFor="date">Date of Birth:</label>
              <input
                type="date"
                id="name"
                value={regPatient.dob}
                onChange={(e) => handleInputChange("dob", e.target.value)}
                name="date"
                required
              />
            </Col>

            <Col>
              <label htmlFor="Email">Email:</label>

              <input
                type="text"
                id="name"
                name="email"
                placeholder="Enter your Email"
                value={regPatient.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
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
      </Container>
    </>
  );
};

export default NewPatientLogin;
