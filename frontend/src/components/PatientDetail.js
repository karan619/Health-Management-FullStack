/* eslint-disable array-callback-return */
import React from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import UpdatePatient from "./UpdatePatient";

const PatientDetail = () => {
  const token = sessionStorage.getItem("token");
  const [patient, getPatient] = useState([]);
  const [search, setSearch] = useState("");

  /** To add a new Patient*/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [HealthCard, setHealthCard] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const [Email, setEmail] = useState("");

  const subForm = async (e) => {
    e.preventDefault();

    //console.log("thsi is record", HealthCard, name);

    if (
      HealthCard === "" ||
      name === "" ||
      address === "" ||
      gender === "" ||
      DOB === "" ||
      Email === ""
    ) {
      alert("Fill in required fields");
      return;
    }
    //console.log("this is ", addPatient.HealthCard);
    await fetch("http://localhost:4000/register_patient/personal-details", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        HealthCard,
        name,
        address,
        gender,
        DOB,
        Email,
      }),
    });

    const responsePatient = await fetch(
      "http://localhost:4000/register_patient/",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await responsePatient.json();

    //console.log("this is data", data);
    getPatient(data);
    setHealthCard("");
    setName("");
    setAddress("");
    setGender("");
    setDOB("");
    setEmail("");

    setShow(false);
  };

  /**To delete Entry */
  const delEntry = async (id) => {
    if (window.confirm("Are you sure")) {
      await fetch(`http://localhost:4000/register_patient/delete/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const responsePatient = await fetch(
        "http://localhost:4000/register_patient/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await responsePatient.json();
      getPatient(data);
    }
  };

  //console.log("this is healthcard", addPatient);

  useEffect(() => {
    const getData = async () => {
      const responsePatient = await fetch(
        "http://localhost:4000/register_patient/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await responsePatient.json();

      //console.log("this is data", data);
      getPatient(data);
    };
    getData();
  }, [token]);

  return (
    <>
      <div>
        <Button variant="primary" onClick={handleShow}>
          Add Patient
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a New Patient</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasic">
                <Form.Label>HealthCard</Form.Label>
                <Form.Control
                  value={HealthCard}
                  onChange={(e) => setHealthCard(e.target.value)}
                  type="text"
                  name="HealthCard"
                  placeholder="Enter HealthCard"
                />
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                />
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  name="Address"
                  placeholder="Enter Address"
                />
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Sex</Form.Label>
                <Form.Control
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  type="text"
                  name="gender"
                  placeholder="Enter Sex"
                />
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  value={DOB}
                  onChange={(e) => setDOB(e.target.value)}
                  type="text"
                  name="DOB"
                  placeholder="YYYY-M-D"
                />
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="Email"
                  placeholder="Enter Your Email"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={subForm}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search By HealthCard"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Health Card #</th>
            <th>Name</th>
            <th>Address</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {patient.length > 0 &&
            patient
              .filter((entry) => {
                if (search === "") {
                  return entry;
                } else if (entry.HealthCard.toString().includes(search)) {
                  return entry;
                }
              })
              .map((entry) => (
                <tr>
                  <td>{entry.HealthCard}</td>
                  <td>{entry.name}</td>
                  <td>{entry.address}</td>
                  <td>{entry.gender}</td>
                  <td>{entry.DOB}</td>
                  <td>{entry.Email}</td>
                  <td>
                    <UpdatePatient healthcard={entry.HealthCard} />
                  </td>
                  <td>
                    <Button onClick={() => delEntry(entry.HealthCard)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </>
  );
};

export default PatientDetail;
