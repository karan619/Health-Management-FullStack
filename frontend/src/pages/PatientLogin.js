import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
//import AppointmentPortal from "./AppointmentPortal";
//import NewPatientLogin from "./NewPatientLogin";

const PatientLogin = () => {
  let history = useHistory();
  const [auth, setAuth] = useState(true);
  const [message, setMessage] = useState("");
  const [patient, setPatient] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (key, val) => {
    setPatient({ ...patient, [key]: val });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();

    if (patient.username === "" || patient.password === "") {
      alert("Fill in required fields");
      return;
    }
    const response = await fetch("http://localhost:4000/signIn-patient", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: patient.username,
        password: patient.password,
      }),
    });

    const payload = await response.json();

    if (response.status >= 400) {
      setAuth(false);
      setMessage("wrong: username/password");
    } else {
      setAuth(true);
      sessionStorage.setItem("token", payload.token);
      history.push("/patient-portal");
    }
  };

  return (
    <>
      <section>
        <div>
          <h1 className="bg-secondary">PATIENT LOGIN PAGE</h1>
        </div>
      </section>
      <div id="login-name">
        {!auth && <h1>Indvalid</h1>}
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          id="name"
          required
          value={patient.username}
          onChange={(e) => handleInputChange("username", e.target.value)}
        />

        <label htmlFor="password">PASSWORD:</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={patient.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
        />

        <button onClick={loginSubmit}>PATIENT LOGIN</button>

        <p>{message}</p>

        <Button href="/register-patient">
          Don't have an account? Click here to sign up.
        </Button>
      </div>
    </>
  );
};

export default PatientLogin;
