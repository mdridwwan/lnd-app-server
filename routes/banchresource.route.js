const express = require("express");
const {
  internUser,
  lndUser,
} = require("../controllers/banachresource.controller");

const banchRouter = express.Router();

banchRouter.get("/intern", internUser);
banchRouter.get("/lnd", lndUser);

module.exports = banchRouter;
