const Client = require("../models/clientModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

// get all Clients
const getClients = asyncHandler(async (req, res) => {
  try {
    const clients = await Client.find({});
    res.status(200).json({
      success: true,
      message: "Clients Fetched Successfully",
      data: clients,
    })
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// get a single Client
const getClient = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);
    res.status(200).json({
      success: true,
      message: "Client Fetched Successfully",
      data: client,
    })
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Register/create a Client
const createClient = asyncHandler(async (req, res) => {
  try {
    const {email, firstName, lastName, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const newClient = new Client({ email, firstName, lastName, password: hashedPassword})
    await newClient.save()
    res.status(200).json({
      success: true,
      message: "Client Created Successfully",
      data: newClient,
    })
  } catch (error) {
    throw new Error(error.message);
  }
});

//  Update a Client
const updateClient = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByIdAndUpdate(id, req.body);
    //we cannot find any client in database
    if (!client) {
      res.status(404);
      throw new Error(`cannot find any client with ID ${id}`);
    }
    const updatedClient = await Client.findById(id);
    res.status(200).json({
      success: true,
      message: "Client Updated Successfully",
      data: updatedClient,
    })
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//  delete a Client
const deleteClient = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByIdAndDelete(id);
    if (!client) {
      res.status(404);
      throw new Error(`cannot find any client with ID ${id}`);
    }
    res.status(200).json({
      success: true,
      message: "Client Deleted Successfully",
      data: [],
    })
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
};
