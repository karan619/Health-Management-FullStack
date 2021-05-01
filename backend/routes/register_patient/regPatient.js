import express from "express";
import bcrypt from "bcryptjs";
import * as db from "../../dbHandler/patientdbHandler";
import jwtVerfiy from "../../middlewear/jwtVerify";
const router = express.Router();

//creating username and password for patient
router.post("/", async (req, res) => {
  try {
    const newUser = {
      ...req.body,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    };
    const hash = await bcrypt.hash(newUser.password, 10);
    newUser.password = hash;
    newUser.confirmPassword = hash;

    await db.patientlogin(newUser);
    return res.send(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

//register new patient
router.post("/personal-details", async (req, res) => {
  try {
    const newEntry = {
      ...req.body,
    };
    await db.registerPatient(newEntry);
    return res.send(newEntry);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

//delete patient
router.delete("/delete/:id", async (req, res) => {
  try {
    const HealthCard = req.params.id;
    await db.delPatient(HealthCard);
    return res.send(`the user ${HealthCard} has been deleted`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

//update doctor info
router.put("/personal-details", async (req, res) => {
  try {
    const { address, HealthCard } = req.body;
    await db.updPatient([address, HealthCard]);
    return res.send(`the patient with ${HealthCard} has been updated `);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

//get all the patients
router.use(jwtVerfiy);
router.get("/", async (req, res) => {
  res.send(await db.getPatientRecord());
  console.log("it is working");
});

router.get("/patient-detail/:id", async (req, res) => {
  try {
    const HealthCard = req.params.id;
    //await db.getPatientChart(HealthCard);
    return res.send(await db.getPatientById(HealthCard));
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

router.get("/patient-login", async (req, res) => {
  res.send(await db.getPatientlogin());
  console.log("it is working");
});

export default router;
