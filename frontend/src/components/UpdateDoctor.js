import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UpdateDoctor = ({ EmpId }) => {
  const [show, setShow] = useState(false);
  const token = sessionStorage.getItem("token");
  const [emp_id, setID] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = async (id) => {
    const response = await fetch(
      `http://localhost:4000/register_doctor/records/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log("this is data", data);

    setName(data[0].name);
    setPosition(data[0].position);

    setID(id);
    setShow(true);
  };

  const handleSubmit = async (emp_id, name, position) => {
    await fetch("http://localhost:4000/register_doctor/", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, position, emp_id }),
    });
    //console.log("this", address, HealthCard);
    window.location.reload(false);

    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => handleShow(EmpId)}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Form for Emp:{emp_id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Position</Form.Label>
              <Form.Control
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                type="text"
                placeholder="Position"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleSubmit(emp_id, name, position)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateDoctor;
