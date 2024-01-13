const asyncHandler = require("express-async-handler");
const noticesModel = require("../models/notices.model");

exports.newNotice = asyncHandler(async (noticeBody) => {
  const { notice_name, notice_description, upcomeing_date, technolgy } =
    noticeBody;
  const notice = await noticesModel.create({
    notice_name,
    notice_description,
    upcomeing_date,
    technolgy,
  });
  return notice;
});

exports.updateNotice = asyncHandler(async (id, notice) => {
  let findNotice = await noticesModel.findById(id);
  const { notice_name, notice_description, upcomeing_date, technolgy } = notice;
  findNotice.notice_name = notice_name;
  findNotice.notice_description = notice_description;
  findNotice.upcomeing_date = upcomeing_date;
  findNotice.technolgy = technolgy;
  const updateNotices = await findNotice.save();
  return updateNotices;
});
