import faculty from "../../../models/faculty.js";
import connectDB from "../../../middleware/mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingFaculty = await faculty.findOne({ username });
    if (!existingFaculty) {
      return res.status(404).json("FFaculty doesn't exist.");
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingFaculty.password
    );
    if (!isPasswordCorrect) {
      return res.status(404).json("Invalid Credentials");
    }
    const token = jwt.sign(
      {
        email: existingFaculty.email,
        id: existingFaculty._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_SECRET }
    );
    res.status(200).json({ result: existingFaculty, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
