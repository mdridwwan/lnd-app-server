const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  createNotice,
  notice,
  updateNotices,
  deleteNotice,
} = require("../controllers/notice.controller");

const noticeRouter = express.Router();

noticeRouter.get("/", notice);
noticeRouter.post("/", protect, createNotice);
noticeRouter.patch("/:id", protect, updateNotices);
noticeRouter.delete("/:id", protect, deleteNotice);

module.exports = noticeRouter;
