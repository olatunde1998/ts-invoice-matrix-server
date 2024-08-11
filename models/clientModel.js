const mongoose = require("mongoose");
const clientSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter First name"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter Last name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter Password"],
    },
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model("client", clientSchema);
module.exports = Client;
