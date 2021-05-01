import express from "express";
import * as db from "../../dbHandler/patientChartHandler";
import jwtVerfiy from "../../middlewear/jwtVerify";
const router = express.Router();

//to add new doctor notes
router.post("/add-doctornote", async (req, res) => {
  try {
    const newEntry = {
      ...req.body,
    };
    await db.addDocNote(newEntry);
    return res.send(newEntry);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

//get patient chart using healthcard
//router.use(jwtVerfiy);
router.get("/:id", async (req, res) => {
  try {
    const HealthCard = req.params.id;
    //await db.getPatientChart(HealthCard);
    return res.send(await db.getPatientChart(HealthCard));
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

export default router;
