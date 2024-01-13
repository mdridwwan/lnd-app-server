const userModel = require("../models/user.model");
const { hash } = require("../services/hashing.service");
const { createUser } = require("../services/user.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

exports.signUpUser = asyncHandler(async (req, res) => {
	const { name, email, password, employee_id, role, tag } = req.body;
	const passwordHash = await hash(password);
	const newUser = createUser(name, email, passwordHash, employee_id, role, tag);
	res.json({
		message: "User created",
		data: newUser,
	});
});

exports.loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await userModel.findOne({ email });

	if (!user) {
		return res.status(401).json({ error: "Invalid credentials" });
	}

	const passwordMatch = await bcrypt.compare(password, user.password_hash);
	if (!passwordMatch) {
		return res.status(401).json({ error: "Invalid credentials" });
	}

	const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
		expiresIn: "2d",
	});
	console.log(token);
	res.json({ message: true, token: token, role: user.role });
});
