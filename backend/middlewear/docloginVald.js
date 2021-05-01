const docloginValid = (req, res, next) => {
  let errMsg = {
    message: "validation error",
    invalid: [],
  };

  if (!req.body.id) {
    errMsg.invalid.push("id");
  }

  if (!req.body.password) {
    errMsg.invalid.push("password");
  } else if (req.body.password.length < 8) {
    errMsg.invalid.push("must be a minimum 8 characters");
  }

  if (req.body.confirmPassword != req.body.password) {
    errMsg.invalid.push("password do not match");
  }

  if (errMsg.invalid.length > 0) {
    return res.status(400).json(errMsg);
  }
  next();
};

export { docloginValid };
