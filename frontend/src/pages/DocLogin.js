import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const DocLogin = () => {
  let history = useHistory();
  const [emp_id, setEmpId] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(true);
  const [message, setMessage] = useState("");

  const loginSubmit = async (e) => {
    e.preventDefault();

    if (emp_id === "" || password === "") {
      alert("Fill in required fields");
      return;
    }
    const response = await fetch("http://localhost:4000/signIn-doctor", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emp_id, password }),
    });

    const payload = await response.json();

    if (response.status >= 400) {
      setAuth(false);
      setMessage("wrong: username/password");
    } else {
      setAuth(true);
      sessionStorage.setItem("token", payload.token);
      history.push("/doc-portal");
    }
  };

  return (
    <>
      <section>
        <div>
          <h1 className="bg-secondary">DOCTOR LOGIN PAGE</h1>
        </div>
      </section>
      <div id="login-name">
        {!auth && <h1>Invalid</h1>}
        <form onSubmit={loginSubmit}>
          <label for="employee id">Employee ID</label>
          <input
            value={emp_id}
            onChange={(e) => setEmpId(e.target.value)}
            type="text"
            name="email"
            id="name"
            required
          />

          <label htmlFor="password">PASSWORD:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            required
          />

          <button>LOGIN</button>
        </form>
        <p>{message}</p>
      </div>
    </>
  );
};

export default DocLogin;
