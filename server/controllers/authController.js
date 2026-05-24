import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

export const LoginUser = async (req, res) => {
  try {
    //Get user input
    const { email, password } = req.body;

    //Check if user already exists in DB
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).send("User not found");
    }

    // 2. Compare password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    res.status(201).json({
      message: "Login successfull",
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const registerUser = async (req, res) => {
  try {
    //Get user input
    const { name, email, password } = req.body;

    //Check if user already exists in DB
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).send("Username already taken");
    }

    const newUser = await User.create({ email, name, password });
    const token = generateToken(newUser._id);
    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        name: newUser.name,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
