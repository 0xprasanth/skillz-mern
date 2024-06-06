const express = require("express");

const skillController = require("../controller/skillController");
const app = require("../app");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("reply from skillRouter");
});

router.post("/submit", skillController.submitScore);

router.get('/userinfo/:userId', skillController.getUser )

module.exports = router;
