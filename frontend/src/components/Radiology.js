import React from "react";
import { Table, Modal, Button } from "react-bootstrap";
import { useState } from "react";

const Radiology = ({ Name, Recieved, Notes, Images }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Test Name</th>
            <th>Date</th>
            <th>Image</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Name}</td>
            <td>{Recieved}</td>
            <td>
              <Button variant="primary" onClick={handleShow}>
                Show Image
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <img src={Images} alt="images" />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </td>
            <td>{Notes}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Radiology;
