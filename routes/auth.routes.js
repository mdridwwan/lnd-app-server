const express = require("express");
const { signUpUser, loginUser } = require("../controllers/auth.controller");
const authRouter = express.Router();

authRouter.post("/signup", signUpUser);
authRouter.post("/login", loginUser);

module.exports = authRouter;
