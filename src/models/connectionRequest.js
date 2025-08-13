const mongoose = require("mongoose");

const connectionRequestSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required:true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["ignored", "interested", "accepted", "rejected"],
        message: `{VALUE} is incorrect status type`,
      },
    },
  },
  { timestamps: true,}
);


connectionRequestSchema.index({ fromUserId: 1, toUserId: 1 });

connectionRequestSchema.pre("validate", function (next) {
  const connectionRequest = this;

  if (connectionRequest.fromUserId.equals(this.toUserId)) {
    throw new Error("You can not send a connection request to yourself !!");
  }
  next();
});

const ConnectionRequest = mongoose.model(
  "connectionRequest",
  connectionRequestSchema
);

module.exports = ConnectionRequest;