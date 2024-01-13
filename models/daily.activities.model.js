const mongoose = require("mongoose");

const dailyactiviesSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  headtitle: { default: "", type: String },
  date1: { default: " ", type: String },
  date2: { default: " ", type: String },
  date3: { default: " ", type: String },
  date4: { default: " ", type: String },
  date5: { default: " ", type: String },
  day1: { default: " ", type: String },
  day2: { default: " ", type: String },
  day3: { default: " ", type: String },
  day4: { default: " ", type: String },
  day5: { default: " ", type: String },
  task1: { default: " ", type: String },
  task2: { default: " ", type: String },
  task3: { default: " ", type: String },
  task4: { default: " ", type: String },
  task5: { default: " ", type: String },
  hour1: { default: " ", type: String },
  hour2: { default: " ", type: String },
  hour3: { default: " ", type: String },
  hour4: { default: " ", type: String },
  hour5: { default: " ", type: String },
  date: { type: Date, required: true, default: Date.now() },
});

module.exports = mongoose.model("Dailyactivitie", dailyactiviesSchema);
