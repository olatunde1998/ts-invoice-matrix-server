const express = require("express");

const {
  createInvoice,
  getInvoices,
  getInvoice,
  updateInvoice,
  deleteInvoice,
} = require("../controllers/invoiceController");

const router = express.Router();

// create invoice
router.post("/", createInvoice);

//fetch all invoice
router.get("/", getInvoices);

//fetch a single invoice
router.get("/:id", getInvoice);

//Update a invoice
router.put("/:id", updateInvoice);

//Delete a invoice
router.delete("/:id", deleteInvoice);

module.exports = router;
