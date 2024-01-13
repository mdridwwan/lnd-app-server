const asyncHandler = require("express-async-handler");
const noticesModel = require("../models/notices.model");
const { newNotice, updateNotice } = require("../services/notice.services");

exports.notice = asyncHandler(async (req, res) => {
  const notice = await noticesModel.find({}).select("-__v");
  res.json(notice);
});

exports.createNotice = asyncHandler(async (req, res) => {
  const noticeBody = req.body;
  const newNotices = newNotice(noticeBody);
  res.json({ message: "Notice created", data: noticeBody });
});

exports.updateNotices = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const notice = req.body;
  updateNotice(id, notice);
  res.json({ message: "Notice update successfuly", data: notice });
});

exports.deleteNotice = asyncHandler(async (req, res) => {
  const notice = await noticesModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Notice Successfuly deleted", notice });
});
