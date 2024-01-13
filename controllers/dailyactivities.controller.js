const asyncHandler = require("express-async-handler");
const dailyActivitiesModel = require("../models/daily.activities.model");
const { updateDailyActivities } = require("../services/activities.services");
const jwt = require("jsonwebtoken");
const ExcelJS = require("exceljs");

exports.dailyactivies = asyncHandler(async (req, res) => {
  const userDailyActivities = await dailyActivitiesModel
    .find({})
    .select("-__v");
  res.json(userDailyActivities);
});
exports.findUserdailyactivities = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const dailyData = await dailyActivitiesModel
    .find({
      user_id: id,
    })
    .select("-__v");
  // .select("-__v")
  res.json({
    message: "User All Daily Activites Successfuly Show",
    data: dailyData,
  });
});

exports.exportStudentSheet = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Student Sheets");

    worksheet.columns = [
      { header: "DATE", key: "Date", width: 32 },
      { header: "DAY OF THE WEEK	", key: "day1", width: 32 },
      { header: "TASK", key: "task1", width: 52 },
      { header: "Hour", key: "hour1", width: 32 },
    ];

    const studentData = await dailyActivitiesModel
      .find({
        user_id: id,
      })
      .select("-__v");

    let count = 1;

    studentData.forEach((user) => {
      // worksheet.addRow({ id: user.id, Day: user.day1, Date: user.date1 });
      worksheet.addRow(user);
      worksheet.getColumn(DATE).values = [
        user.date1,
        user.date2,
        user.date3,
        user.date4,
        user.date5,
      ];
      count += 1;
    });

    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheatml.sheet"
    );
    res.setHeader("Content-Disposition", `attachment; filename=users.xlsx`);

    return workbook.xlsx.write(res).then(() => {
      res.status(200);
    });

    res.json({
      message: "User All Daily Activites Successfuly Show",
      data: studentData,
    });
  } catch (error) {
    console.log(error.message);
  }
});

exports.createdailyactivies = asyncHandler(async (req, res) => {
  const token = req.header("Authorization");
  const onlyToken = token.split(" ")[1];
  const decoded = jwt.verify(onlyToken, process.env.JWT_SECRET);
  let {
    headtitle,
    date1,
    date2,
    date3,
    date4,
    date5,
    day1,
    day2,
    day3,
    day4,
    day5,
    task1,
    task2,
    task3,
    task4,
    task5,
    hour1,
    hour2,
    hour3,
    hour4,
    hour5,
    date,
  } = req.body;
  let user_id = decoded.id;
  // console.log("user id token", user_id);
  const dailyactivies = await dailyActivitiesModel.create({
    user_id,
    headtitle,
    date1,
    date2,
    date3,
    date4,
    date5,
    day1,
    day2,
    day3,
    day4,
    day5,
    task1,
    task2,
    task3,
    task4,
    task5,
    hour1,
    hour2,
    hour3,
    hour4,
    hour5,
    date,
  });
  res.json({
    message: "Create Daily Activities successfuly",
    data: dailyactivies,
  });
});

exports.updatedailyactivities = asyncHandler(async (req, res) => {
  const id = await dailyActivitiesModel.findById(req.params.id);
  console.log(id);
  const activitesBody = await req.body;
  updateDailyActivities(id, activitesBody);
  res.json({ message: "update activites Successfuly", data: activitesBody });
});

exports.deletedailyactivities = asyncHandler(async (req, res) => {
  const deletedailuactivities = await dailyActivitiesModel.findByIdAndDelete(
    req.params.id
  );
  res.json({ message: "daily activities is deleted", deletedailuactivities });
});
