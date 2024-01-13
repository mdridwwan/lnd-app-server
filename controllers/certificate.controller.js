const asyncHandler = require("express-async-handler");
const certificateModel = require("../models/certificate.model");

exports.notApproveCertificates = asyncHandler(async (req, res) => {
  const allCertificates = await certificateModel
    .find({ isApproved: false })
    .select("-__v");
  res.json(allCertificates);
});

exports.certificates = asyncHandler(async (req, res) => {
  const allCertificates = await certificateModel
    .find({ isApproved: true })
    .select("-__v");
  res.json(allCertificates);
});

exports.createCertificate = asyncHandler(async (req, res) => {
  const certificate = await certificateModel.create(req.body);
  res.json({
    message: "Successfuly Create Certificate",
    data: certificate,
  });
});

exports.approveCertificate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const certificate = await certificateModel.findByIdAndUpdate(
      id,
      { isApproved: true },
      { new: true }
    );

    res.json(certificate);
  } catch (error) {
    throw new Error("Invalid certificate ID");
  }
});
exports.deleteCertificate = asyncHandler(async (req, res) => {
  const deleted = await certificateModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Successfuly deleted Certificates", data: deleted });
});
