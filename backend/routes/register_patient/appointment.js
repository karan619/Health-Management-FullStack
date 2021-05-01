import express from "express";
import * as db from "../../dbHandler/appointmentdbHandler";
const router = express.Router();

//create a new appointment
router.post("/", async (req, res) => {
  try {
    const newEntry = {
      ...req.body,
    };
    await db.createAppointment(newEntry);
    return res.send(newEntry);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

//delete doctor
router.delete("/:id", async (req, res) => {
  try {
    const appointment_id = req.params.id;
    await db.delAppointment(appointment_id);
    return res.send(`the apppointment ${appointment_id} has been deleted`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

//update doctor info
router.put("/update-appointment", async (req, res) => {
  try {
    const {
      appointment_id,
      appointment_date_time,
      type_of_appointment,
    } = req.body;
    await db.updAppointment([
      appointment_date_time,
      type_of_appointment,
      appointment_id,
    ]);
    return res.send(`the appointment ${appointment_id} has been updated `);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

export default router;
