const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ApiResponse = require("../utils/ApiResponse");
const User = require("../models/User");

const { createUser } = require("../services/auth.service");

const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/generateTokens");

const {
  saveRefreshToken,
} = require("../services/token.service");


// Signup
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json(
      new ApiResponse(true, "User Registered", user)
    );
  } catch (error) {
    return res.status(500).json(
      new ApiResponse(false, error.message)
    );
  }
};


// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json(
        new ApiResponse(false, "User not found")
      );
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json(
        new ApiResponse(false, "Invalid credentials")
      );
    }

    const accessToken = generateAccessToken(user);

    const refreshToken = generateRefreshToken(user);

    await saveRefreshToken(
      user._id,
      refreshToken
    );

    return res.status(200).json(
      new ApiResponse(true, "Login successful", {
        accessToken,
        refreshToken,
      })
    );
  } catch (error) {
    return res.status(500).json(
      new ApiResponse(false, error.message)
    );
  }
};