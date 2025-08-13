const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
     "mongodb+srv://souravghosh:TzR4bHTYtzhV36FM@namastenodejs.hshd5dk.mongodb.net/devTinder"  
    )
}



module.exports = connectDB;


// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect(
//             "mongodb+srv://souravghosh:TzR4bHTYtzhV36FM@namastenodejs.hshd5dk.mongodb.net/devTinder"
//         );
//         console.log("MongoDB connected");
//     } catch (error) {
//         console.error("MongoDB connection error:", error);
//         throw error; 
//     }
// };

// module.exports = connectDB;