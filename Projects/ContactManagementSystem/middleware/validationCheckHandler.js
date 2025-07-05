const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization; // Fix typo

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedInfo) => {
      if (err) {
        res.status(401);
        throw new Error("User is not Authorized");
      }
      req.user = decodedInfo.user;
      next();
    });
  } else {
    res.status(401);
    throw new Error("No token provided");
  }
});

module.exports = validateToken;
