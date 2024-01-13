const asyncHandler = require("express-async-handler");
const instituteModel = require("../models/institute.model");
const {
  newIsntitute,
  updateInstitutes,
} = require("../services/institute.service");

exports.institute = asyncHandler(async (req, res) => {
  const institutes = await instituteModel.find({}).select("-__v");
  res.json(institutes);
});

exports.createInstitute = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const newInstitute = newIsntitute(name);
  res.json({ message: "Institute created", data: newInstitute });
});

exports.updateInstitute = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const institute = req.body.name;
  updateInstitutes(id, institute);
  res.json({ message: "Institute is Update Success", data: institute });
});

exports.deleteInstitute = asyncHandler(async (req, res) => {
  const institute = await instituteModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Institute is deleted", data: institute });
});
