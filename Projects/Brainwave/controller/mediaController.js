const imageController = (req, res) => {
  res.json({ message: "Image Route" });
};
const videoController = (req, res) => {
  res.json({ message: "Video Route" });
};
const musicController = (req, res) => {
  res.json({ message: "Music Route" });
};

module.exports = {
  imageController,
  videoController,
  musicController,
};
