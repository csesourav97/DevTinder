const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");


const cookieParser = require("cookie-parser");
const app = express();
const port = 7777;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/requests");
const userRouter = require("./routes/user");


app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

// Endpoint: "/user" to get user by email

// app.get("/user", async (req, res) => {
//   const userEmail = req.body.emailId;
//   try {
//     // const users = await User.find({ emailId: userEmail });
//     // if (users.length === 0) {
//     //   res.status(404).send("User not found");
//     // } else {
//     //   res.send(users);
//     // }
//     const user = await User.findOne({ emailId: userEmail });
//     if (!user) {    
//       res.status(404).send("User not found");
//     }else {
//       res.send(user);
//     }
//   } catch (err) {
//     res.status(400).send("Error fetching user", err);
//   }
// });

 //Endpoint: "/feed" to get all users

// app.get("/feed", async (req, res) => {
//   try {
//     const users = await User.find({});
//     if (users.length === 0) {
//       res.status(404).send("No users found");
//     } else {
//       res.send(users);
//     }
//   } catch (err) {
//     res.status(400).send("Error fetching user", err);
//   }
// });

 // Endpoint: "/user" to delete user

// app.delete("/user", async (req, res) => {
//     const userId = req.body.userId;
//     try{
//         const user = await User.findByIdAndDelete({_id:userId});
//         res.send("User deleted successfully");

//     } catch (err){
//         res.status(400).send("Error deleting user", err);
//     }
// });


//Endpoint: "/user/:userId" to update user
// app.patch("/user/:userId", async (req, res) => {
//   const userId = req.params?.userId;
//   const data = req.body;

//   try {
//     const ALLOWED_UPDATES = ["photoUrl", "age", "gender", "about", "skills"];
//     const isUpdateAllowed = Object.keys(data).every((field) =>
//       ALLOWED_UPDATES.includes(field)
//     );

//     if (!isUpdateAllowed) {
//       throw new Error("Invalid updates");
//     }
//     if(data?.skills.length >10){
//       throw new Error("Skills cannot have more than 10 entries");   
//     }

//     const user = await User.findByIdAndUpdate(userId, data, {
//       returnDocument: "after",
//       runValidators: true,
//     });
//     res.send("User updated successfully");
  
//   } catch (err) {
//     res.status(400).send("ERROR: " + err.message);
//   }
// });


connectDB().then(() => {
    console.log("Database connected successfully. ");
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
     
}).catch((err) =>{
    console.error("Database connection failed  !!" +err);
    throw err;
}) ;








