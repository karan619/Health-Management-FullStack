import React from "react";
import moment from "moment";
import { Table, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";

const DoctorStatus = () => {
  const token = sessionStorage.getItem("token");
  const [docStatus, getStatus] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const responsePatient = await fetch(
        "http://localhost:4000/doctor-status/records",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await responsePatient.json();

      //console.log("this is data", data);
      getStatus(data);
    };
    getData();
  }, [token]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Emp_id</th>
            <th>Doctor Name</th>
            <th>Status</th>
            <th>Login_Status</th>
          </tr>
        </thead>
        <tbody>
          {docStatus.length > 0 &&
            docStatus.map((entry) => (
              <tr>
                <td>{entry.doctors_id}</td>
                <td>{entry.name}</td>
                <td>{entry.status}</td>
                <td>
                  {moment(entry.login_time).format("MMMM Do YYYY, h:mm:ss a")}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default DoctorStatus;
