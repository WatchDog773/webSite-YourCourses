const express = require("express");
const router = express.Router();

const securityConfig = require("../config/security");

const apiAuth = require("./api/api_auth");
const apiCourses = require("./api/api_courses");

router.use("/auth", apiAuth);
router.use("/courses", apiCourses);

const heartBeat = (req, res) => {
  res.status(200).json({ ok: true });
};

router.get("/heartbeat", securityConfig.verifyUser, heartBeat);

module.exports = router;
