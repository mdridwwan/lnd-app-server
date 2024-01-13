const express = require("express");
const {
  user,
  createUser,
  updateUser,
  deleteUser,
  userDetails,
  internUser,
  updateUserInfo,
  exitsBanch,
  approveExitsBanch,
} = require("../controllers/user.controller");
const { protect } = require("../middleware/authMiddleware");
const userRouter = express.Router();

userRouter.get("/", user);
userRouter.get("/:id", protect, userDetails);
userRouter.get("/exits/users", protect, exitsBanch);
userRouter.get("/exits/:id", protect, approveExitsBanch);
userRouter.patch("/:id", protect, updateUser);
userRouter.get("/info/:id", protect, updateUserInfo);
userRouter.delete("/:id", protect, deleteUser);

module.exports = userRouter;
