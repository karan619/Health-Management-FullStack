import React from "react";
import { Table } from "react-bootstrap";

const ImmunizationRecord = ({ Name, Recieved, Notes }) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Immunization Name</th>
            <th>Recieved</th>
            <th>Date of Recieving</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Name}</td>
            <td>{Recieved}</td>
            <td>@mdo</td>
            <td>{Notes}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ImmunizationRecord;
