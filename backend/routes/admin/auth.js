import express from "express";
import * as jwtGenerator from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as dbAdmin from "../../dbHandler/admindbHandler";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await dbAdmin.whereAdmin(name);

    if (user.length > 0) {
      const validPass = await bcrypt.compare(password, user[0].password);
      //console.log("valid password", validPass);

      if (validPass) {
        const token = jwtGenerator.sign({ name }, process.env.JWT_SECRET, {
          expiresIn: "50m",
        });

        return res.json({ token });
      } else {
        return error;
      }
    }
  } catch (error) {
    return res.status(401).send({ error: "incorrect username/password" });
  }
});

export default router;
