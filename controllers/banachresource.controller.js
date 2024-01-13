const asyncHandler = require("express-async-handler");
const userModel = require("../models/user.model");

exports.internUser = asyncHandler(async (req, res) => {
  const users = await userModel
    .find({ tag: "Intern", isApprovedExits: false })
    .select("-__v");
  res.json(users);
});

exports.lndUser = asyncHandler(async (req, res) => {
  const users = await userModel
    .find({ tag: "L&D", isApprovedExits: false })
    .select("-__v");
  res.json(users);
});
