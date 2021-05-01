import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function PatientUserName() {
  let history = useHistory();
  const [HCN, setHCN] = useState("");
  const [auth, setAuth] = useState(true);
  const [patient, setPatient] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });
  useEffect(() => {
    if (localStorage && localStorage.getItem("HCN")) {
      setHCN(JSON.parse(localStorage.getItem("HCN")));
    }
  }, []);

  const handleInputChange = (key, val) => {
    setPatient({ ...patient, [key]: val });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();

    if (patient.username === "" || patient.password === "") {
      alert("Fill in required fields");
      return;
    }
    const response = await fetch("http://localhost:4000/register_patient", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pat_hcn: HCN,
        username: patient.username,
        password: patient.password,
        confirmPassword: patient.confirmpassword,
      }),
    });

    const payload = await response.json();

    if (response.status >= 400) {
      setAuth(false);
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
          <h1 className="bg-secondary">CREATE USERNAME AND PASSWORD</h1>
        </div>
      </section>
      <div id="login-name">
        <form>
          <label for="employee id">USERNAME</label>
          <input
            type="text"
            value={patient.username}
            onChange={(e) => handleInputChange("username", e.target.value)}
            name="username"
            id="name"
            required
          />

          <label htmlFor="password">PASSWORD:</label>
          <input
            type="password"
            value={patient.password}
            name="password"
            id="password"
            onChange={(e) => handleInputChange("password", e.target.value)}
            required
          />

          <label htmlFor="password">CONFIRM PASSWORD:</label>
          <input
            type="password"
            value={patient.confirmpassword}
            name="confirmpassword"
            onChange={(e) =>
              handleInputChange("confirmpassword", e.target.value)
            }
            id="password"
            required
          />

          <button onClick={loginSubmit}>SUBMIT</button>
        </form>
      </div>
    </>
  );
}

export default PatientUserName;
