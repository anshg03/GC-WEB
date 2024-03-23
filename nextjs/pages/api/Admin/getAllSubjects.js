import student from "../../../models/student.js";
import connectDB from "../../../middleware/mongoose";
import faculty from "../../../models/faculty.js";
import branch from "../../../models/branch.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import subject from "../../../models/subject";

const handler = async (req, res) => {
  try {
    const subjects = await subject.find();
    res.status(200).json(subjects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
