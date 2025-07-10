const express = require("express");
const {
  videoController,
  musicController,
  imageController,
} = require("../controller/mediaController");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const chat = require("../model/chat");

router.get("/", (req, res) => {
  res.json({ message: "Home route" });
});

router.post(
  "/video",
  body("prompt").isString().notEmpty(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { prompt, username } = req.body;
    const newChat = new chat({
      username: username,
      chat: {
        prompt: prompt,
        response: "Hello There video",
      },
      model: " Video model ",
    });
    await newChat.save();
    res.json({ message: "Video" });
  }
);

router.post(
  "/image",
  body("prompt").isString().notEmpty(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { prompt, username } = req.body;
    const newChat = new chat({
      username: username,
      chat: {
        prompt: prompt,
        response: "Hello There Image",
      },
      model: "Image model",
    });
    await newChat.save();
    res.json({ message: "Image" });
  }
);

router.post(
  "/music",
  body("prompt").isString().notEmpty(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { prompt, username } = req.body;
    const newChat = new chat({
      username: username,
      chat: {
        prompt: prompt,
        response: "Hello There Music",
      },
      model: "  Music Model ",
    });
    await newChat.save();
    res.json({ message: "Music" });
  }
);

// router.post("/video", videoController);
// router.post("/image", imageController);
// router.post("/music", musicController);
module.exports = router;
