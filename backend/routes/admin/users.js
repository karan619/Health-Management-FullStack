import express from "express";
import bcrypt from "bcryptjs";
import { adminValid } from "../../middlewear/adminValid";
import * as dbAdmin from "../../dbHandler/admindbHandler";

const router = express.Router();

router.post("/", adminValid, async (req, res) => {
  try {
    const newUser = {
      username: req.body.name,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    };
    const hash = await bcrypt.hash(newUser.password, 10);
    newUser.password = hash;
    newUser.confirmPassword = hash;

    await dbAdmin.addAdmin(newUser);
    return res.send("Admin account has been created");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal Server error" });
  }
});

export default router;
