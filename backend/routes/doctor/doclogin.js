import express from "express";
import bcrypt from "bcryptjs";
import { docloginValid } from "../../middlewear/docloginVald";
import * as db from "../../dbHandler/doctordbHandler";

const router = express.Router();

/** admin will create doctor login */
router.post("/", docloginValid, async (req, res) => {
  try {
    const newUser = {
      emp_id: req.body.id,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    };
    const hash = await bcrypt.hash(newUser.password, 10);
    newUser.password = hash;
    newUser.confirmPassword = hash;

    await db.doclLogin(newUser);
    return res.send(`doctor ${newUser.emp_id} account has been created`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

export default router;
