const express = require("express");
const {
  technology,
  createTechnology,
  updateTechnology,
  deleteTechnology,
} = require("../controllers/technology.controller");
const { protect } = require("../middleware/authMiddleware");

const technologyRouter = express.Router();

technologyRouter.get("/", protect, technology);
technologyRouter.post("/", protect, createTechnology);
technologyRouter.patch("/:id", protect, updateTechnology);
technologyRouter.delete("/:id", protect, deleteTechnology);

module.exports = technologyRouter;
