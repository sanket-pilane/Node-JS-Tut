const User = require("../model/user");

const showAllUsersForAdmin = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json({ count: users.length, users });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch users", error: err.message });
  }
};

module.exports = showAllUsersForAdmin;
