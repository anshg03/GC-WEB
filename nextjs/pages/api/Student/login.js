import student from "../../../models/student.js";
import connectDB from "../../../middleware/mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingStudent = await student.findOne({ username });
    if (!existingStudent) {
      return res.status(404).json("Student doesn't exist.");
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingStudent.password
    );
    if (!isPasswordCorrect) {
      return res.status(404).json("Invalid Credentials");
    }
    const token = jwt.sign(
      {
        email: existingStudent.email,
        id: existingStudent._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_SECRET }
    );
    res.status(200).json({ result: existingStudent, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
