const express = require("express");

const {
  createClient,
  getClients,
  getClient,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");

const router = express.Router();

// create client
router.post("/", createClient);

//fetch all product
router.get("/", getClients);

//fetch a single client
router.get("/:id", getClient);

//Update a client
router.put("/:id", updateClient);

//Delete a client
router.delete("/:id", deleteClient);

module.exports = router;
