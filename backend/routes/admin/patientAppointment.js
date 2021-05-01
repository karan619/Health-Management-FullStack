import express from "express";
import * as db from "../../dbHandler/admindbHandler";
import jwtVerfiy from "../../middlewear/jwtVerify";
const router = express.Router();

//assign doctor to existing appointment
router.put("/update-appointment", async (req, res) => {
  try {
    const { appointment_id, appointment_status, assigned_doctor } = req.body;
    await db.addDoctorAppoint([
      assigned_doctor,
      appointment_status,
      appointment_id,
    ]);
    return res.send(`the appointment ${appointment_id} has been updated `);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

//to show all the appointments
router.use(jwtVerfiy);
router.get("/", async (req, res) => {
  res.send(await db.getPatientAppointment());
  console.log("it is working");
});

export default router;
