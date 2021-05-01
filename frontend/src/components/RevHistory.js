import React from "react";
import moment from "moment";
import { Table } from "react-bootstrap";

function RevHistory({ Notes }) {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Docto Name</th>
            <th>Patient Name</th>
            <th>Updates</th>
            <th>Created Time</th>
          </tr>
        </thead>
        <tbody>
          {Notes.length > 0 &&
            Notes.map((record) => (
              <tr>
                <td>{record.doctor_name}</td>
                <td>{record.patient_name}</td>
                <td>{record.note}</td>
                <td>
                  {moment(record.created_time).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default RevHistory;
