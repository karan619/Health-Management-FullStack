import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UpdatePatient = ({ healthcard }) => {
  const [show, setShow] = useState(false);
  const [HealthCard, getId] = useState("");
  const [address, setAddress] = useState("");
  const token = sessionStorage.getItem("token");

  const handleClose = () => setShow(false);
  const handleShow = async (id) => {
    const response = await fetch(
      `http://localhost:4000/register_patient/patient-detail/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log("this is address", data[0].address);
    setAddress(data[0].address);

    getId(id);
    setShow(true);
  };

  const handleSubmit = async (HealthCard, address) => {
    await fetch("http://localhost:4000/register_patient/personal-details", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address, HealthCard }),
    });
    //console.log("this", address, HealthCard);
    window.location.reload(false);

    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => handleShow(healthcard)}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Form for Patient:{HealthCard}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Update Address</Form.Label>
              <Form.Control
                type="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter New Address"
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
            onClick={() => handleSubmit(HealthCard, address)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdatePatient;
