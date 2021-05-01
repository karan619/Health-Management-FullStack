/* eslint-disable array-callback-return */
import React from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import UpdateDoctor from "./UpdateDoctor";

const DoctorDetail = () => {
  const token = sessionStorage.getItem("token");
  const [doctor, getDoctor] = useState([]);
  const [search, setSearch] = useState("");

  /** Add doctor modal */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [position, setPosition] = useState("");
  const [sin, setSin] = useState("");

  const subForm = async (e) => {
    e.preventDefault();
    if (name === "" || gender === "" || position === "" || sin === "") {
      alert("Fill in required fields");
      return;
    }

    await fetch("http://localhost:4000/register_doctor", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        gender,
        position,
        sin,
      }),
    });
    const response = await fetch(
      "http://localhost:4000/register_doctor/records",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    //console.log("this is data", data);
    getDoctor(data);
    setName("");
    setGender("");
    setPosition("");
    setSin("");
    setShow(false);
  };

  /**To delete Entry */
  const delEntry = async (id) => {
    if (window.confirm("Are you sure")) {
      await fetch(`http://localhost:4000/register_doctor/delete/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const response = await fetch(
        "http://localhost:4000/register_doctor/records",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      //console.log("this is data", data);
      getDoctor(data);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "http://localhost:4000/register_doctor/records",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      //console.log("this is data", data);
      getDoctor(data);
    };
    getData();
  }, [token]);

  return (
    <>
      <div>
        <Button variant="primary" onClick={handleShow}>
          Add Doctor
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a New Patient</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
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
                <Form.Label>Position</Form.Label>
                <Form.Control
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  type="text"
                  name="gender"
                  placeholder="Enter Sex"
                />
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>SIN#</Form.Label>
                <Form.Control
                  value={sin}
                  onChange={(e) => setSin(e.target.value)}
                  type="text"
                  name="gender"
                  placeholder="Enter Sex"
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
          placeholder="Search By Doctor's Name"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Emp_Id#</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Position</th>
              <th>Sin</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doctor.length > 0 &&
              doctor
                .filter((entry) => {
                  if (search === "") {
                    return entry;
                  } else if (
                    entry.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return entry;
                  }
                })
                .map((entry) => (
                  <tr>
                    <td>{entry.emp_id}</td>
                    <td>{entry.name}</td>
                    <td>{entry.gender}</td>
                    <td>{entry.position}</td>
                    <td>{entry.sin}</td>
                    <td>
                      <UpdateDoctor EmpId={entry.emp_id} />
                    </td>
                    <td>
                      <Button onClick={() => delEntry(entry.emp_id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default DoctorDetail;
