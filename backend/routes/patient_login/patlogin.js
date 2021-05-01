import express from "express";
import * as jwtGenerator from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as db from "../../dbHandler/patientSigndbHandler";

const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await db.patSignIn(username);
    console.log(user);

    if (user.length > 0) {
      const validPass = await bcrypt.compare(password, user[0].password);
      console.log("valid password", validPass);

      if (validPass) {
        const token = jwtGenerator.sign({ username }, process.env.JWT_SECRET, {
          expiresIn: "50m",
        });

        return res.json({ token });
      } else {
        return error;
      }
    } else {
      return error;
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send({ error: "incorrect username/password" });
  }
});

export default router;
