const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require("jsonwebtoken");
const bcrypt= require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      MaxLength: 50,
    },
    lastName: {
      type: String,
    
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is not valid");
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Enter a strong passwprd");
        }
      },
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      enum:{ 
        values:["male","female","other"],
        message: `{VALUE} is not a valid gender type`
      },
      // validate(value) {
      //   if (!["male", "female", "other"].includes(value)) {
      //     throw new Error("gender entry is not valid");
      //   }
      // },
    },
    photoUrl: {
      type: String,
      default: "https://www.w3schools.com/howto/img_avatar.png",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid photo URL!!!");
        }
      },
    },
    about: {
      type: String,
      default: "Hey there! This is a default about section",
    },
    skills: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);


userSchema.index({firstName: 1, lastname: 1});

userSchema.methods.getJWT = async function(){
    const user = this;
    const token = jwt.sign({ _id: user._id }, "Dev@Tinder$790", {
      expiresIn: "1d",
    });
    return token;
}


userSchema.methods.validatePassword = async function(passwordInputByUser){
    const user = this;
    const passwordHash = user.password;

    isPasswordvalid = await bcrypt.compare(
        passwordInputByUser,
        passwordHash
    );
    return isPasswordvalid;
}
const User = mongoose.model('User', userSchema);

module.exports = User;
