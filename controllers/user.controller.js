const express = require("express");
const asyncHandler = require("express-async-handler");
const userModel = require("../models/user.model");
const {
  userUpdateServices,
  userUpdateInfoServices,
} = require("../services/user.service");
const dailyActivitiesModel = require("../models/daily.activities.model");

exports.user = asyncHandler(async (req, res) => {
  const users = await userModel.find({ isApprovedExits: false }).select("-__v");
  res.json(users);
});

exports.userDetails = asyncHandler(async (req, res) => {
  const id = await req.params.id;
  const userDetails = await userModel.findById(id);
  const dailyData = await dailyActivitiesModel
    .find({
      user_id: id,
    })
    .select("hour1 hour2 hour3 hour4 hour5");
  const allHour = await dailyData.map(
    (x) =>
      Number(x.hour1) +
      Number(x.hour2) +
      Number(x.hour3) +
      Number(x.hour4) +
      Number(x.hour5)
  );
  function sum(arr) {
    let sum = 0; // initialize sum
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum;
  }
  const totalHour = await sum(allHour);
  if (!userDetails) {
    res.send("Invalidate id");
  }
  userDetails.course_time_entry = totalHour;
  userDetails.course_time_left = userDetails.course_time - totalHour;

  res.send(userDetails);
});

exports.updateUser = asyncHandler(async (req, res) => {
  const id = await req.params.id;
  const dailyData = await dailyActivitiesModel
    .find({
      user_id: id,
    })
    .select("hour1 hour2 hour3 hour4 hour5");
  const userUpdate = await req.body;
  userUpdateServices(id, userUpdate, dailyData);
  res.json({ message: " Update successfuly", data: userUpdateServices });
});

exports.updateUserInfo = asyncHandler(async (req, res) => {
  const id = await req.params.id;

  res.json({ message: " Update successfuly", data: id });
});

exports.exitsBanch = asyncHandler(async (req, res) => {
  try {
    const exitsBanchUser = await userModel
      .find({ isApprovedExits: true })
      .select("-__v");
    res.json(exitsBanchUser);
  } catch (error) {
    throw new Error("Invalid User ");
  }
});

exports.approveExitsBanch = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const exitsBanch = await userModel.findByIdAndUpdate(
      id,
      { isApprovedExits: true },
      { new: true }
    );

    res.json(exitsBanch);
  } catch (error) {
    throw new Error("Invalid User ID");
  }
});

exports.deleteUser = asyncHandler(async (req, res) => {
  const user = await userModel.findByIdAndDelete(req.params.id);
  res.json({ message: "user is deleted", user });
});
