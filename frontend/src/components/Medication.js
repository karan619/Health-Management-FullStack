import React from "react";
import { Table } from "react-bootstrap";

const Medication = ({ MediName, DateStarted, DateStopped, Ongoing, Notes }) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Medication Name</th>
            <th>Date Started</th>
            <th>Date Stopped</th>
            <th>Ongoing</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{MediName}</td>
            <td>{DateStarted}</td>
            <td>{DateStopped}</td>
            <td>{Ongoing}</td>
            <td>{Notes}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Medication;
