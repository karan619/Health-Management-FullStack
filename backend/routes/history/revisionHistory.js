import express from "express";
import * as db from "../../dbHandler/revisionHistory";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newEntry = {
      ...req.body,
    };
    await db.createHistory(newEntry);
    return res.send(newEntry);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

export default router;
