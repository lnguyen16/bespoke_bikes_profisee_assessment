const express = require("express");
const Bike = require("../model/Bike");
const router = express.Router();
const bikesController = require("../controllers/bikes-controller");

// Routes the commands in the database to add, delete, update the information
router.get("/", bikesController.getAllBikes);
router.post("/", bikesController.addBike);
router.get("/:id", bikesController.getById);
router.put("/:id", bikesController.updateBike);
router.delete("/:id", bikesController.deleteBike);

module.exports = router;