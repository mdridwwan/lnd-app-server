const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const userModel = require("../models/user.model");

const protect = asyncHandler(async (req, res, next) => {
  const token = req.header("Authorization");

  if (token) {
    try {
      const onlyToken = token.split(" ")[1];
      const decoded = jwt.verify(onlyToken, process.env.JWT_SECRET);

      req.user = await userModel.findById(decoded.id).select("-password");

      next();
    } catch (err) {
      res.status(401);
      throw new Error(
        "Tampered access token detected! This incident will be reported"
      );
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("You are not logged in");
  }
});

const checkPermissions = (permissions) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (permissions.includes(userRole)) {
      next();
    } else {
      res.status(401);
      throw new Error("Unauthorized action");
    }
  };
};

module.exports = { protect, checkPermissions };
