const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
	name: { type: String, required: true },
	institute: { type: String, required: true },
	technology: { type: String, required: true },
	joining_date: { type: Date, required: true },
	career_start_date: { type: Date, required: true },
	certificate: { type: String, required: true },
	isApproved: { type: String, required: true, default: false },
});

module.exports = mongoose.model("Certificates", certificateSchema);
