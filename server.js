const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const adminRouter = require("./routes/admin.router");
const authRouter = require("./routes/auth.routes");
const instituteRouter = require("./routes/institute.router");
const technologyRouter = require("./routes/technology.router");
const connectDB = require("./config/db");
const {
  errorHandler,
  clientError,
  serverError,
} = require("./middleware/errorMiddleware");
const userRouter = require("./routes/user.routes");
const dailyactivitiesRouter = require("./routes/dailyactivities.router");
const createError = require("http-errors");
const noticeRouter = require("./routes/notice.router");
const certificateRouter = require("./routes/certificate.router");
const banchRouter = require("./routes/banchresource.route");

const app = express();
dotenv.config();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/banch", banchRouter);
app.use("/api/v1/institute", instituteRouter);
app.use("/api/v1/technology", technologyRouter);
app.use("/api/v1/activities", dailyactivitiesRouter);
app.use("/api/v1/notices", noticeRouter);
app.use("/api/v1/certificates", certificateRouter);

// app.use((err, res, req, next) => {
//   console.log(err);
// });

app.use(errorHandler);
app.use(clientError);
app.use(serverError);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
