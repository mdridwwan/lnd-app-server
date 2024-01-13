const instituteModel = require("../models/institute.model");
const asyncHandler = require("express-async-handler");

exports.newIsntitute = asyncHandler(async (name) => {
  const user = await instituteModel.create({ name });
  return user;
});

exports.updateInstitutes = asyncHandler(async (id, institute) => {
  let findInstitute = await instituteModel.findById(id);
  if (findInstitute.name === institute) {
    throw new Error("Institute already exists");
  }
  findInstitute.name = institute;
  await findInstitute.save();
});
