import express from "express";
import * as db from "../../dbHandler/doctordbHandler";
//import { regDocVald } from "../../middlewear/regDocVald";
import jwtVerfiy from "../../middlewear/jwtVerify";
const router = express.Router();

//register new doctor
router.post("/", async (req, res) => {
  try {
    const newEntry = {
      ...req.body,
    };
    await db.regDoc(newEntry);
    return res.send(newEntry);
  } catch (error) {
    return res.status(500).json({ error: "internal Server error" });
  }
});

//delete doctor
router.delete("/delete/:id", async (req, res) => {
  try {
    const emp_id = req.params.id;
    await db.delDoc(emp_id);
    return res.send(`the user ${emp_id} has been deleted`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

//update doctor info
router.put("/", async (req, res) => {
  try {
    const { emp_id, name, position } = req.body;
    await db.updDoc([name, position, emp_id]);
    return res.send(`the user${emp_id} has been updated `);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

// to view doctor records
router.use(jwtVerfiy);
router.get("/records", async (req, res) => {
  res.send(await db.getDocRecord());
  console.log("it is working");
});

router.get("/records/:id", async (req, res) => {
  try {
    const emp_id = req.params.id;
    //await db.getPatientChart(HealthCard);
    return res.send(await db.getDoctorById(emp_id));
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

export default router;
