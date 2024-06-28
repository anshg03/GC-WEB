import student from "../../../models/student.js";
import connectDB from "../../../middlewares/mongoose";
import faculty from "../../../models/faculty.js";
import branch from "../../../models/branch.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import solution from "../../../models/solution.js";

const handler = async (req, res) => {
  try {
    const { department, year, section } = req.body;

    const sol = await solution.find({ department, year, section });

    res.status(200).json({ result: sol });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
