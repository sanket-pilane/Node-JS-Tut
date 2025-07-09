const Replicate = require("replicate");
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Image generation controller
const imageController = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const input = {
      prompt: prompt,
      prompt_upsampling: true,
    };

    const output = await replicate.run("black-forest-labs/flux-1.1-pro", {
      input,
    });

    res.status(200).json({ imageUrl: output, prompt });
  } catch (error) {
    console.error("Replicate Error:", error);
    res.status(500).json({ error: "Image generation failed" });
  }
};

// Video route (stub)
const videoController = async (req, res) => {
  try {
    const { prompt } = req.prompt;

    if (!prompt) {
      res.status(400).json({ erro: "Prompt is required" });
    }

    const input = {
      prompt: prompt,
      prompt_upsampling: true,
    };

    const output = await replicate.run("bytedance/seedance-1-lite", {
      input,
    });

    res.status(200).json({ videoUrl: output, prompt });
  } catch (err) {
    console.log("Replicate Error: ", error);
    res.status(500).json({ error: "Image generation failed" });
  }
};

// Music route (stub)
const musicController = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      res.status(400).json({ error: "Prompt is required" });
    }

    const input = {
      prompt: prompt,
      prompt_upsampling: true,
    };

    const output = await replicate.run("bytedance/seedance-1-lite", {
      input,
    });
    res.status(200).json({ videoUrl: output, prompt });
  } catch (err) {
    console.log("Replicate Error: ", err);
    res.status(500).json({ error: "Failed to Generate video" });
  }
  res.status(200).json({ message: "Music generation route coming soon." });
};

module.exports = {
  imageController,
  videoController,
  musicController,
};
