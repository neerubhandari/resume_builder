import User from "../models/User.js";
export const registerUser = async (req, res) => {
  console.log("REGISTER HIT from controller");
  try {
    //Get user input
    const { name, email, password } = req.body;
    console.log("REGISTER HIT");
    //Check if user already exists in DB
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).send("Username already taken");
    }
    console.log("REGISTER HIT");
    const newUser = await User.create({ email, name, password });
    res.status(201).json({
      message: "User registered successfully",
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
