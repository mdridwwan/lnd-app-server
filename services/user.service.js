const userModel = require("../models/user.model");
const asyncHandler = require("express-async-handler");

exports.createUser = asyncHandler(
  async (name, email, password_hash, employee_id, role, tag) => {
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const user = await userModel.create({
      name,
      email,
      password_hash,
      employee_id,
      role,
      tag,
    });
    return user;
  }
);

exports.userUpdateServices = asyncHandler(async (id, userUpdate, dailyData) => {
  const {
    phone,
    nid,
    birth_date,
    father_name,
    mother_name,
    present_address,
    permanent_address,
    technolgy,
    institute,
    joining_date,
    career_start_date,
    experties_area,
    lnd_training_area,
    lnd_assign_date,
    course_time,
    status_of_training,
    experience,
    mentor,
    sbu,
  } = userUpdate;
  const findUser = await userModel.findById(id);
  findUser.phone = phone;
  findUser.nid = nid;
  findUser.birth_date = birth_date;
  findUser.father_name = father_name;
  findUser.mother_name = mother_name;
  findUser.present_address = present_address;
  findUser.permanent_address = permanent_address;
  findUser.technolgy = technolgy;
  findUser.institute = institute;
  findUser.joining_date = joining_date;
  findUser.career_start_date = career_start_date;
  findUser.experties_area = experties_area;
  findUser.lnd_training_area = lnd_training_area;
  findUser.lnd_assign_date = lnd_assign_date;
  findUser.course_time = course_time;
  // findUser.course_time_entry = totalHour;
  // findUser.course_time_left = leftTime;
  findUser.status_of_training = status_of_training;
  findUser.experience = experience;
  findUser.mentor = mentor;
  findUser.sbu = sbu;
  await findUser.save();
  console.log(findUser);
  return findUser;
});

exports.userUpdateInfoServices = asyncHandler(async (id, userUpdate) => {
  const findUser = await userModel.findById(id);

  return findUser;
});
