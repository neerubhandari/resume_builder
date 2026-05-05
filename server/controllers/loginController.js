import User from "../models/User.js";
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

    res.status(201).json({
      message: "Login successfull",
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
