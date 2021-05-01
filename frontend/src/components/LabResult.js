import React from "react";
import { Table } from "react-bootstrap";

const LabResult = ({ Name, date, Result, Notes }) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Test Name</th>
            <th>Date</th>
            <th>Result</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Name}</td>
            <td>{date}</td>
            <td>{Result}</td>
            <td>{Notes}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default LabResult;
