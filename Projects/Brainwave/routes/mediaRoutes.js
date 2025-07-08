const express = require("express");
const {
  videoController,
  musicController,
  imageController,
} = require("../controller/mediaController");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Home route" });
});

router.post("/video", videoController);
router.post("/image", imageController);
router.post("/music", musicController);
module.exports = router;
