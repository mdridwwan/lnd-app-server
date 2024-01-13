const errorHandler = async (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    error: true,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
const clientError = (req, res, next) => {
  next(createError(404, "route not found"));
};
const serverError = (err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
};

module.exports = {
  errorHandler,
  clientError,
  serverError,
};
