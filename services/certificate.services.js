const technologyModel = require("../models/technology.model");
const asyncHandler = require("express-async-handler");

exports.newCertificates = asyncHandler(async (name) => {
  const user = await technologyModel.create({ name });
  return user;
});

// exports.updateTechnologyServices = asyncHandler(async (id, technology) => {
//   let findTechnology = await technologyModel.findById(id);
//   if (findTechnology.name === technology) {
//     throw new Error("Technology already exists");
//   }
//   findTechnology.name = technology;
//   await findTechnology.save();
// });
