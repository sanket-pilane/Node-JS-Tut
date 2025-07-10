const express = require("express");
const {
  videoController,
  musicController,
  imageController,
} = require("../controller/mediaController");
const { body, validationResult } = require("express-validator");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Home route" });
});

router.post(
  "/video",
  body("prompt").isString().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    videoController(req, res, next);
  }
);

router.post(
  "/image",
  body("prompt").isString().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    imageController(req, res, next);
  }
);

router.post(
  "/music",
  body("prompt").isString().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    musicController(req, res, next);
  }
);

// router.post("/video", videoController);
// router.post("/image", imageController);
// router.post("/music", musicController);
module.exports = router;
