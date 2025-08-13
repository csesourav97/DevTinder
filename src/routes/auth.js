const express = require('express');

const bcrypt = require("bcrypt");
const User = require("../models/user");
const { validateSignUpData } = require("../utils/validator");




const authRouter = express.Router();



authRouter.post("/signup", async (req, res) => {
  try {
    // Validate the signup data
    validateSignUpData(req);

    //Encrypt the password
    const { firstName, lastName, emailId, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    //creating new instance of user model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

   const savedUser = await user.save();
   const token = await savedUser.getJWT();
   //Add the token to cookie and send the response back to user.

   res.cookie("token", token, {
     expires: new Date(Date.now() + 8 * 3600000),
   });
    res.json({ message:"User created successfully!", data:savedUser });
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});


authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      //create a JWT token
      const token = await user.getJWT();
      //Add the token to cookie and send the response back to user.

      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });

      res.send(user);
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

authRouter.post("/logout", async (req, res) =>{

    res.cookie("token", null, {
        expires: new Date(Date.now())
    });
    res.send("Logout successfull");
    

});
  
  

module.exports = authRouter;