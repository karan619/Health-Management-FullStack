import express from "express";
import cors from "cors";
import admin from "./routes/admin/users";
import adminAuth from "./routes/admin/auth";
import updAppoint from "./routes/admin/patientAppointment";
import doctorLogin from "./routes/doctor/doclogin";
import signInDoc from "./routes/doctor/docAuth";
import registerDoctor from "./routes/doctor/docReg";
import docStatus from "./routes/doctor_status/docStatus";
import registerPatient from "./routes/register_patient/regPatient";
import signInPatient from "./routes/patient_login/patlogin";
import patientChart from "./routes/patient_chart/patientChart";
import createAppointment from "./routes/register_patient/appointment";
import contactForm from "./routes/contact/entries";
import revisionHistory from "./routes/history/revisionHistory";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

/*app.get("/", (req, res) => {
  res.send("Hello World!");
});*/
app.use("/contact_form/entries", contactForm);
app.use("/admin", admin);
app.use("/admin_auth", adminAuth);
app.use("/admin_appointment", updAppoint);
app.use("/doctor_login", doctorLogin); // to create a login for doctor's account
app.use("/signIn-doctor", signInDoc);
app.use("/signIn-patient", signInPatient);
app.use("/register_doctor", registerDoctor);
app.use("/register_patient", registerPatient);
app.use("/get-patientChart", patientChart);
app.use("/doctor-status", docStatus);
app.use("/create_appointment", createAppointment);

app.use("/revision-history", revisionHistory);

app.use(function (error, req, res, next) {
  if (res.headersSent) {
    return next(error);
  }

  console.error(error.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
