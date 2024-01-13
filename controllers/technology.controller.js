const asyncHandler = require("express-async-handler");
const technologyModel = require("../models/technology.model");
const {
  newTechnology,
  updateTechnologyServices,
} = require("../services/technology.service");

exports.technology = asyncHandler(async (req, res) => {
  const technologyes = await technologyModel.find({}).select("-__v");
  res.json(technologyes);
});

exports.createTechnology = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const newTechnologys = newTechnology(name);
  res.json({ message: "User created", data: newTechnologys });
});

exports.updateTechnology = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const technology = req.body.name;
  updateTechnologyServices(id, technology);
  res.json({ message: "Technology is Updated", data: technology });
});

exports.deleteTechnology = asyncHandler(async (req, res) => {
  const technology = await technologyModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Technology is deleted" });
});
