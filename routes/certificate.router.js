const express = require("express");
const {
  certificates,
  createCertificate,
  deleteCertificate,
  approveCertificate,
  notApproveCertificates,
} = require("../controllers/certificate.controller");

const certificateRouter = express.Router();
const { protect } = require("../middleware/authMiddleware");

certificateRouter.get("/", certificates);
certificateRouter.get("/pending/", protect, notApproveCertificates);
certificateRouter.get("/:id", protect, approveCertificate);
certificateRouter.post("/", protect, createCertificate);
certificateRouter.delete("/:id", protect, deleteCertificate);

module.exports = certificateRouter;
