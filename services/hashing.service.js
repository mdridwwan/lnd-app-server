const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

exports.hash = asyncHandler(async (data) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(data, salt);
  return hash;
});
