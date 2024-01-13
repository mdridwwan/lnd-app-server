const asyncHandler = require("express-async-handler");
const dailyActivitiesModel = require("../models/daily.activities.model");

exports.updateDailyActivities = asyncHandler(async (id, activitesBody) => {
  let findDailyActivites = await dailyActivitiesModel.findById(id);
  const {
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
  } = activitesBody;
  findDailyActivites.headtitle = headtitle;
  findDailyActivites.date1 = date1;
  findDailyActivites.date2 = date2;
  findDailyActivites.date3 = date3;
  findDailyActivites.date4 = date4;
  findDailyActivites.date5 = date5;
  findDailyActivites.day1 = day1;
  findDailyActivites.day2 = day2;
  findDailyActivites.day3 = day3;
  findDailyActivites.day4 = day4;
  findDailyActivites.day5 = day5;
  findDailyActivites.task1 = task1;
  findDailyActivites.task2 = task2;
  findDailyActivites.task3 = task3;
  findDailyActivites.task4 = task4;
  findDailyActivites.task5 = task5;
  findDailyActivites.hour1 = hour1;
  findDailyActivites.hour2 = hour2;
  findDailyActivites.hour3 = hour3;
  findDailyActivites.hour4 = hour4;
  findDailyActivites.hour5 = hour5;

  await findDailyActivites.save();
});
