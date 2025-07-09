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

router.post("/video", (req, res) => {
  res.json({ message: "video route" });
});
router.post("/image", (req, res) => {
  res.json({ message: "image route" });
});
router.post("/music", (req, res) => {
  res.json({ message: "music route" });
});
// router.post("/video", videoController);
// router.post("/image", imageController);
// router.post("/music", musicController);
module.exports = router;
