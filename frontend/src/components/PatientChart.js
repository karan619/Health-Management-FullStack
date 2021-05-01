import React from "react";
import { Table } from "react-bootstrap";
const PatientChart = ({
  Bloodgroup,
  Height,
  Weight,
  BloodPressure,
  Allergies,
}) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Bloodgroup</th>
            <th>Height</th>
            <th>Weight</th>
            <th>BloodPressure</th>
            <th>Allergies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Bloodgroup}</td>
            <td>{Height}</td>
            <td>{Weight}</td>
            <td>{BloodPressure}</td>
            <td>{Allergies}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default PatientChart;
