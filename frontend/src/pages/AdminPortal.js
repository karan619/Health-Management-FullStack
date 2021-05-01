import React from "react";
import { Tab, Row, Col, Nav, Button } from "react-bootstrap";
import AppointmentDetails from "../components/AppointmentDetails";
import DoctorDetail from "../components/DoctorDetail";
import DoctorStatus from "../components/DoctorStatus";
import PatientDetail from "../components/PatientDetail";
import { useHistory } from "react-router";
const AdminPortal = () => {
  let history = useHistory();

  const logOut = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("token");
    history.push("/admin-login");
  };
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Patient Details</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Doctor Details</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Doctor Status</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">
                  Patient Appointment Details
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <PatientDetail />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <DoctorDetail />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <DoctorStatus />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <AppointmentDetails />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <div>
        <Button onClick={logOut}>LogOut</Button>
      </div>
    </>
  );
};

export default AdminPortal;
