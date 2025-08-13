const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName || !lastName) {
    throw new Error("Name is not valid");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email id is not valid !");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong password!");
  }
};

const validateEditProfileData = (req) => {
  const allowedEditfields = [
    "firstName",
    "lastName",
    "photoUrl",
    "emailId",
    "age",
    "gender",
    "about",
    "skills",
  ];

  const isEditallowed = Object.keys(req.body).every((field) => 
    allowedEditfields.includes(field)
  );


return isEditallowed;
};

module.exports = {
  validateSignUpData,
  validateEditProfileData,
};