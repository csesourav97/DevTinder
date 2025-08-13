const express = require('express');

const User = require("../models/user");
const jwt = require("jsonwebtoken")
const { userAuth } = require("../middlewares/auth");
const { validateEditProfileData } = require('../utils/validator');


const profileRouter = express.Router();



profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const cookies = req.cookies;
    const { token } = cookies;
    if (!token) {
      throw new Error("Invalid Token");
    }

    //validate the token
    const decodedMessage = jwt.verify(token, "Dev@Tinder$790");
    const { _id } = decodedMessage;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found.");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid Edit Request");
    }

    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => {
      loggedInUser[key] = req.body[key];
    });

    await loggedInUser.save();

    res.json({
      message: `${loggedInUser.firstName}, your Profile updated successfully`,
      data: loggedInUser,});

  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

profileRouter.patch("/profile/password", userAuth , async (req,res) => {
    try {

    } catch (err) {
        res.status(400).send("ERROR: " + err.message);
    }

});

module.exports = profileRouter;
