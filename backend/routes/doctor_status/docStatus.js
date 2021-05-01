import express from "express";
import jwtVerfiy from "../../middlewear/jwtVerify";
import * as db from "../../dbHandler/docStatusHandler";
const router = express.Router();

router.post("/add-record", async (req, res) => {
  try {
    const newEntry = {
      ...req.body,
    };
    await db.regDoc(newEntry);
    return res.addStatus(newEntry);
  } catch (error) {
    return res.status(500).json({ error: "internal Server error" });
  }
});

//to get all the doctors status
router.use(jwtVerfiy);
router.get("/records", async (req, res) => {
  res.send(await db.getDocStatus());
  console.log("it is working");
});

export default router;
