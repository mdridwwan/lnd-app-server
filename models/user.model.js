const mongoose = require("mongoose");
const ExpressJoi = require("express-joi-validator");
const joi = require("joi");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: [true, "Email required"],
    unique: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (props) => `${props} Please enter a valid email`,
    },
  },
  employee_id: { default: " ", type: String, unique: true },
  phone: { default: " ", type: String },
  role: { default: "", type: String, required: true },
  password_hash: { type: String, required: true },
  nid: { default: " ", type: String },
  birth_date: { type: Date, default: Date.now() },
  father_name: { default: " ", type: String },
  mother_name: { default: " ", type: String },
  present_address: { default: " ", type: String },
  permanent_address: { default: " ", type: String },
  technolgy: { default: " ", type: String },
  institute: { default: " ", type: String },
  experties_area: { default: " ", type: String },
  lnd_training_area: { default: " ", type: String },
  lnd_assign_date: { default: " ", type: String },
  course_time: { default: " ", type: String },
  course_time_entry: { default: " ", type: String },
  course_time_left: { default: " ", type: String },
  status_of_training: { default: " ", type: String },
  experience: { default: " ", type: String },
  mentor: { default: " ", type: String },
  sbu: { default: " ", type: String },
  tag: { type: String, required: true, enum: ["L&D", "Intern"] },
  image_url: { default: " ", type: String },
  joining_date: { type: Date, default: Date.now() },
  career_start_date: { type: Date, default: Date.now() },
  isApprovedExits: { type: String, required: true, default: false },
});

module.exports = mongoose.model("User", userSchema);
