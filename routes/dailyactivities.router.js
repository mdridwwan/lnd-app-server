const express = require("express");
const {
  dailyactivies,
  createdailyactivies,
  updatedailyactivities,
  deletedailyactivities,
  findUserdailyactivities,
  exportStudentSheet,
} = require("../controllers/dailyactivities.controller");
const { protect } = require("../middleware/authMiddleware");
const dailyactivitiesRouter = express.Router();

dailyactivitiesRouter.get("/", dailyactivies);
dailyactivitiesRouter.get("/:id", findUserdailyactivities);
dailyactivitiesRouter.get("/exportexcel/:id", exportStudentSheet);
dailyactivitiesRouter.post("/", protect, createdailyactivies);
dailyactivitiesRouter.patch("/:id", protect, updatedailyactivities);
dailyactivitiesRouter.delete("/:id", protect, deletedailyactivities);

module.exports = dailyactivitiesRouter;
