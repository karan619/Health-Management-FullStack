import { emailValidate } from "../util/emailValid";

const contactVald = (req, res, next) => {
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
  if (!emailValidate(req.body.email)) {
    errMsg.invalid.push("email");
  }

  //checking for valid phone number
  if (!req.body.phoneNumber) {
    errMsg.invalid.push("phone number");
  } else if (req.body.phoneNumber.length != 10) {
    errMsg.invalid.push("phone number");
  }

  if (!req.body.content) {
    errMsg.invalid.push("content");
  }

  if (errMsg.invalid.length > 0) {
    return res.status(400).json(errMsg);
  }
  next();
};

export { contactVald };
