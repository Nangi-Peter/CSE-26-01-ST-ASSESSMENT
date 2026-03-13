const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      placeOfBirth,
      gender,
      nationality,
      maritalStatus,
      settlementCamp,
      dateOfJoining,
    } = req.body;

    // Create a new user instance 
    const newUser = new User({
      firstName,
      lastName,
      dateOfBirth,
      placeOfBirth,
      gender,
      nationality,
      maritalStatus,
      settlementCamp,
      dateOfJoining,
    });

    // Save the new user to the database. 
    const savedUser = await newUser.save();

    res.status(201).json({
      message: "User registered successfully!",
      data: savedUser,
    });
  } catch (error) {
  
    console.error(error);
    res.status(500).json({ message: "Server error during registration." });
  }
};

module.exports = {
  registerUser,
};
