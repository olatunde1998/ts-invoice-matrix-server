const Invoice = require("../models/invoiceModel");
const asyncHandler = require("express-async-handler");

// get all Invoices
const getInvoices = asyncHandler(async (req, res) => {
  try {
    const invoices = await Invoice.find({});
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// get a single Invoice

const getInvoice = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findById(id);
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// create a invoice
const createInvoice = asyncHandler(async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//  Update a invoice
const updateInvoice = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findByIdAndUpdate(id, req.body);
    //we cannot find any invoice in database
    if (!invoice) {
      res.status(404);
      throw new Error(`cannot find any invoice with ID ${id}`);
    }
    const updatedInvoice = await Invoice.findById(id);
    res.status(200).json(updatedInvoice);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//  delete a Invoice
const deleteInvoice = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findByIdAndDelete(id);
    if (!invoice) {
      res.status(404);
      throw new Error(`cannot find any invoice with ID ${id}`);
    }
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  getInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};
