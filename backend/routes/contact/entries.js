import express from "express";
import { contactVald } from "../../middlewear/contactVald";
import jwtVerfiy from "../../middlewear/jwtVerify";
import * as db from "../../dbHandler/contactdbHandler";

const router = express.Router();

//creating new contact form entry
router.post("/", async (req, res) => {
  try {
    const newEntry = {
      ...req.body,
    };
    await db.addUsers(newEntry);
    return res.send(newEntry);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

//update
router.put("/", async (req, res) => {
  try {
    const { id, name, phoneNumber, email } = req.body;
    await db.updUsers([name, phoneNumber, email, id]);
    return res.send(`the user has been updated `);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

router.use(jwtVerfiy);
router.get("/", async (req, res) => {
  res.send(await db.getUsers());
  console.log("it is working");
});

export default router;
