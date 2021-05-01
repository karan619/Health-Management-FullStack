import React from "react";

import { Table } from "react-bootstrap";
function BillingInfo() {
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
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default BillingInfo;
