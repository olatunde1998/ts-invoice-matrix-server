const express = require("express");

const {
  createClient,
  loginClient,
  getClients,
  getClient,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");

const router = express.Router();

// Register/create client
router.post("/", createClient);

// Login a client
router.post("/login", loginClient);

//fetch all product
router.get("/", getClients);

//fetch a single client
router.get("/:id", getClient);

//Update a client
router.put("/:id", updateClient);

//Delete a client
router.delete("/:id", deleteClient);

module.exports = router;
