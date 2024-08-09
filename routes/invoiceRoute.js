const express = require("express");

const {
  createInvoice,
  getInvoices,
  getInvoice,
  updateInvoice,
  deleteInvoice,
} = require("../controllers/invoiceController");

const router = express.Router();

// create client
router.post("/", createInvoice);

//fetch all product
router.get("/", getInvoices);

//fetch a single client
router.get("/:id", getInvoice);

//Update a client
router.put("/:id", updateInvoice);

//Delete a client
router.delete("/:id", deleteInvoice);

module.exports = router;
