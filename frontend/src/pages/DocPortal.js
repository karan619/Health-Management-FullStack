import React from "react";
import iconThree from "../images/hospital-sign.png";
import { useHistory } from "react-router";
import parseJwt from "../helper/authHelper";

import {
  Tab,
  Row,
  Col,
  Nav,
  Form,
  Modal,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

import { useState } from "react";
import PatientChart from "../components/PatientChart";
import ImmunizationRecord from "../components/ImmunizationRecord";
import LabResult from "../components/LabResult";
import Radiology from "../components/Radiology";
import BillingInfo from "../components/BillingInfo";
import MedicalHistory from "../components/MedicalHistory";
import Medication from "../components/Medication";
import DoctorNote from "../components/DoctorNote";
import RevHistory from "../components/RevHistory";

const DocPortal = () => {
  let history = useHistory();
  const token = sessionStorage.getItem("token");
  const user = parseJwt(token).emp_id;
  const [search, setSearch] = useState("");
  const [patient, patientDetail] = useState({
    chart: "",
    medication: "",
    history: "",
    immunization: "",
    labResult: "",
    imaging: "",
    notes: "",
    revHistory: "",
  });

  const logOut = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("token");
    history.push("/doc-login");
  };

  /**Doctor Modal */

  const [list, showNote] = useState(false);
  const [doctors_notes, setPatientNote] = useState("");
  const doctorNoteClose = () => showNote(false);

  const [dispPatient, displayPatient] = useState({
    HCN: "",
    emp_id: "",
    doc_Name: "",
  });

  const doctorNoteShow = (HCN, emp_id, doc_Name) => {
    displayPatient({
      HCN: HCN,
      emp_id: emp_id,
      doc_Name: doc_Name,
    });

    showNote(true);
  };

  /**Add doctor note */

  const addDoctorNote = async (patient_HCN, doctor_empid, doctor_name) => {
    console.log("this is the shit", patient_HCN, doctor_empid, doctor_name);
    if (doctors_notes === "") {
      alert("Fill in required fields");
      return;
    }
    await fetch("http://localhost:4000/get-patientChart/add-doctornote", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patient_HCN,
        doctor_empid,
        doctor_name,
        doctors_notes,
      }),
    });

    const response = await fetch(
      `http://localhost:4000/get-patientChart/${patient_HCN}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();

    patientDetail({
      chart: data.patient_row,
      medication: data.medication_row,
      history: data.medicalHistory_row,
      immunization: data.immunization_row,
      labResult: data.labResult_row,
      imaging: data.imaginig_row,
      notes: data.doctor_notes_row,
      revHistory: data.history_row,
    });

    showNote(false);
    setPatientNote("");
  };

  /** modal for changing address */
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [dispUser, displayUser] = useState({
    id: "",
    user: "",
    patName: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = (HealthCard, name, patName) => {
    displayUser({
      id: HealthCard,
      user: name,
      patName: patName,
    });
    setShow(true);
  };

  /**Update form Function */
  const updEntry = async (HealthCard, doctor_name, patient_name) => {
    if (address && note === "") {
      alert("Fill in required fields");
      return;
    }
    console.log("this is:", HealthCard, doctor_name, patient_name);
    try {
      await fetch("http://localhost:4000/register_patient/personal-details", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address, HealthCard }),
      });

      await fetch("http://localhost:4000/revision-history", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ doctor_name, patient_name, HealthCard, note }),
      });

      const response = await fetch(
        `http://localhost:4000/get-patientChart/${HealthCard}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      patientDetail({
        chart: data.patient_row,
        medication: data.medication_row,
        history: data.medicalHistory_row,
        immunization: data.immunization_row,
        labResult: data.labResult_row,
        imaging: data.imaginig_row,
        notes: data.doctor_notes_row,
        revHistory: data.history_row,
      });
      setShow(false);
      setAddress("");
      setNote("");
    } catch (error) {
      console.log("update post: ", error);
    }
  };

  const getPatient = async () => {
    //e.preventDefault();

    if (search === "") {
      alert("Fill in required fields");
      return;
    }

    const response = await fetch(
      `http://localhost:4000/get-patientChart/${search}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log("this is data", data);
    patientDetail({
      chart: data.patient_row,
      medication: data.medication_row,
      history: data.medicalHistory_row,
      immunization: data.immunization_row,
      labResult: data.labResult_row,
      imaging: data.imaginig_row,
      notes: data.doctor_notes_row,
      revHistory: data.history_row,
    });
    setSearch("");
  };

  return (
    <>
      <table>
        <tr className="userName">
          <img src={iconThree} alt="hospital-sign" class="icon" />
          <h1>Doctor ID: {user}</h1>
        </tr>
      </table>
      <Form inline className="hello">
        <FormControl
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Enter Patient's HCN"
          aria-label="Username"
          aria-describedby="basic-addon1"
          className="mr-sm-1"
        />
        {/** Search Bar */}

        <Button onClick={getPatient} variant="outline-light">
          Search
        </Button>

        {/** logout button */}
        <Button onClick={logOut}>Log Out</Button>
      </Form>

      <Container>
        {!patient.chart ? (
          <p>no patient found</p>
        ) : (
          patient.chart.length > 0 &&
          patient.chart.map((info) => (
            <>
              <Row>
                <Col>Patient HealthCard No.: {info.HealthCard} </Col>
                <Col>Patient Name: {info.name} </Col>
                <Col>Gender: {info.gender} </Col>
                <Col>DOB: {info.DOB}</Col>
              </Row>
              <Row>
                <Col>Address: {info.address}</Col>
                <Col>Email: {info.Email} </Col>
                <Col>Phone: {/*{entry.phone}*/} </Col>
                <Col>Emergency Contact: {/*{entry.emrContact}*/} </Col>
              </Row>
              <Row>
                <Col>Physician Id: {info.assigned_doctor}</Col>
                <Col>Primary Care Physician: {info.doctor_name}</Col>
                <Col>Appointment Date & Time: {info.appointment_date_time}</Col>
                <Col>Reason of Appointment: {info.type_of_appointment}</Col>
              </Row>
              <Button
                variant="primary"
                onClick={() => {
                  handleShow(info.HealthCard, info.doctor_name, info.name);
                }}
              >
                Update Patient Detail
              </Button>

              {/** update patient detail modal */}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{dispUser.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="form">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Update Your Address"
                      />
                    </Form.Group>

                    <Form.Group controlId="form">
                      <Form.Label>Add a Note</Form.Label>
                      <Form.Control
                        type="text"
                        name="note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Add a note"
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      updEntry(dispUser.id, dispUser.user, dispUser.patName);
                    }}
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

              {/** this is doctor note modal */}
              <Button
                variant="primary"
                onClick={() =>
                  doctorNoteShow(
                    info.HealthCard,
                    info.assigned_doctor,
                    info.doctor_name
                  )
                }
              >
                Add Doctor Note
              </Button>

              <Modal show={list} onHide={doctorNoteClose}>
                <Modal.Header closeButton>
                  <Modal.Title>HCN#: {dispPatient.HCN}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="form">
                      <Form.Label>Add Note For Patient</Form.Label>
                      <Form.Control
                        type="text"
                        name="note"
                        value={doctors_notes}
                        onChange={(e) => setPatientNote(e.target.value)}
                        placeholder="Add Patient Note"
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={doctorNoteClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() =>
                      addDoctorNote(
                        dispPatient.HCN,
                        dispPatient.emp_id,
                        dispPatient.doc_Name
                      )
                    }
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          ))
        )}
      </Container>

      {/** these are the tabs for navigation */}
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Patient Charts</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Medical History</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Medication</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Immunization</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Lab Results</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sixth">Radiology</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="seventh">Billing Information</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="eight">Doctor Note</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="ninth">History</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={9}>
            <Tab.Content>
              {patient.chart.length > 0 &&
                patient.chart.map((record) => (
                  <Tab.Pane eventKey="first">
                    {/** Patient Chart Component */}
                    <PatientChart
                      Bloodgroup={record.blood_type}
                      Height={record.height}
                      Weight={record.weight}
                      BloodPressure={record.blood_pressure}
                      Allergies={record.allergies}
                    />
                  </Tab.Pane>
                ))}

              {patient.history.length > 0 &&
                patient.history.map((record) => (
                  <Tab.Pane eventKey="second">
                    {/** Medical History Component */}
                    <MedicalHistory
                      Condition={record.medical_condition}
                      date={record.date_of_diagnosis}
                      Ongoing={record.ongoing_treatment}
                      Notes={record.history_notes}
                    />
                  </Tab.Pane>
                ))}

              {patient.medication.length > 0 &&
                patient.medication.map((record) => (
                  <Tab.Pane eventKey="third">
                    {/** Medication Component */}
                    <Medication
                      MediName={record.medication_name}
                      DateStarted={record.medi_date_started}
                      DateStopped={record.medi_date_stopped}
                      Ongoing={record.ongoing_medication}
                      Notes={record.medication_notes}
                    />
                  </Tab.Pane>
                ))}

              {patient.immunization.length > 0 &&
                patient.immunization.map((record) => (
                  <Tab.Pane eventKey="fourth">
                    {/** Immunization Component */}
                    <ImmunizationRecord
                      Name={record.immunization_name}
                      Recieved={record.recieved}
                      Notes={record.immunization_notes}
                    />
                  </Tab.Pane>
                ))}

              {patient.labResult.length > 0 &&
                patient.labResult.map((record) => (
                  <Tab.Pane eventKey="fifth">
                    {/** Lab Result Component */}
                    <LabResult
                      Name={record.test_name}
                      date={record.test_date}
                      Result={record.test_result}
                      Notes={record.test_notes}
                    />
                  </Tab.Pane>
                ))}

              {patient.imaging.length > 0 &&
                patient.imaging.map((record) => (
                  <Tab.Pane eventKey="sixth">
                    {/** Radiology Component */}
                    <Radiology
                      Name={record.imaging_name}
                      Recieved={record.date_started}
                      Images={record.images}
                      Notes={record.immunization_notes}
                    />
                  </Tab.Pane>
                ))}

              <Tab.Pane eventKey="seventh">
                {/** Billing Component */}
                <BillingInfo />
              </Tab.Pane>

              <Tab.Pane eventKey="eight">
                {/** Doctor Notes Component */}
                <DoctorNote Notes={patient.notes} />
              </Tab.Pane>

              <Tab.Pane eventKey="ninth">
                {/** Revision History Component */}
                <RevHistory Notes={patient.revHistory} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default DocPortal;
