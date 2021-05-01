const regDocVald = (req, res, next) => {
  let errMsg = {
    message: "validation error",
    invalid: [],
  };

  //condition of checking username
  if (!req.body.name) {
    errMsg.invalid.push("name");
  } else if (typeof req.body.name != "string") {
    errMsg.invalid.push("name");
  }

  //checking if email is valid
  if (!req.body.gender) {
    errMsg.invalid.push("gender");
  }

  if (!req.body.position) {
    errMsg.invalid.push("position");
  }

  //checking for valid phone number
  if (!req.body.sin) {
    errMsg.invalid.push("sin");
  } else if (req.body.sin.length != 9) {
    errMsg.invalid.push("sin");
  }

  if (errMsg.invalid.length > 0) {
    return res.status(400).json(errMsg);
  }
  next();
};

export { regDocVald };
