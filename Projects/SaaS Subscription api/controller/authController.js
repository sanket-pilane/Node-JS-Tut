const jwt = require("jsonwebtoken");
const User = require("../model/user");
const bcrypt = require("bcryptjs");

const genereateToken = (user) => {
  const payload = { id: user._id, role: user.role };
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

const registerController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    const tokens = genereateToken(user);
    res.status(200).json({
      user: { id: user._id, email: user.email, role: user.role },
      ...tokens,
    });
  } catch (err) {
    res.status(500).json({ message: "Registation Failed", error: err.message });
  }
};
const loginController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) res.status(401).json({ message: "Invalid credentials" });

    const valid = bcrypt.compare(password, user.password);
    if (!valid) res.status(401).json({ message: "Invalid Credentials" });

    const tokens = genereateToken(user);
    res.status(200).json({
      user: { id: user._id, email: user.email, role: user.role },
      ...tokens,
    });
  } catch (err) {
    res.status(500).json({ message: "Login Failed", error: err.message });
  }
  res.send("login user");
};
const refreshTonesController = (req, res) => {
  res.send(" refresh Token");
};
const logoutController = (req, res) => {
  res.send(" logout");
};

module.exports = {
  registerController,
  loginController,
  refreshTonesController,
  logoutController,
};
