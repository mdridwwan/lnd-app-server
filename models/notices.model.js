const mongoose = require("mongoose");

const noticSchema = new mongoose.Schema({
  notice_name: { type: String, required: true },
  notice_description: { type: String, required: true },
  upcomeing_date: { type: Date, required: true },
  technolgy: { type: String, required: true },
});

module.exports = mongoose.model("Notic", noticSchema);
