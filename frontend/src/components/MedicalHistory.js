import React from "react";
import { Table } from "react-bootstrap";

const MedicalHistory = ({ Condition, date, Ongoing, Notes }) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Medical Condition</th>
            <th>Date of Diagnosis</th>
            <th>On Going Treatment</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Condition}</td>
            <td>{date}</td>
            <td>{Ongoing}</td>
            <td>{Notes}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default MedicalHistory;
