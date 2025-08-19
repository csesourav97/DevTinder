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



connectDB().then(() => {
    console.log("Database connected successfully. ");
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
     
}).catch((err) =>{
    console.error("Database connection failed  !!" +err);
    throw err;
}) ;








