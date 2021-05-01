import * as jwt from "jsonwebtoken";

export default (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(404).send({ message: "token not provided" });
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    console.log(data);
    req.name = data;
    next();
    //throw Error(error);
  } catch (error) {
    console.log(error);
    return res.status(401).send({ message: "token expired" });
  }
};
