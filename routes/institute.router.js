const express = require("express");
const {
  institute,
  createInstitute,
  deleteInstitute,
  updateInstitute,
} = require("../controllers/institute.controller");
const { protect } = require("../middleware/authMiddleware");

const instituteRouter = express.Router();

instituteRouter.get("/", protect, institute);
instituteRouter.post("/", protect, createInstitute);
instituteRouter.patch("/:id", protect, updateInstitute);
instituteRouter.delete("/:id", protect, deleteInstitute);

module.exports = instituteRouter;
