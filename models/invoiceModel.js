const mongoose = require("mongoose");
const invoiceSchema = mongoose.Schema(
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
    },
    amount: {
      type: String,
      required: [true, "Please enter Amount is required"],
    },
    status: {
      type: String,
      required: [true, "Status is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Invoice = mongoose.model("invoice", invoiceSchema);
module.exports = Invoice;
