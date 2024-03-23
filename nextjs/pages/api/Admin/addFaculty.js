import student from "../../../models/student.js";
import connectDB from "../../../middleware/mongoose";
import faculty from "../../../models/faculty.js";
import branch from "../../../models/branch.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
  try {
    const {
      name,
      dob,
      branch,
      contactNumber,
      email,
      joiningYear,
      gender,
      designation,
    } = req.body;
    const existingFaculty = await faculty.findOne({ email });
    if (existingFaculty) {
      return res.status(400).json("Email already exists");
    }
    const existingDepartment = await branch.findOne({ branch });
    let departmentHelper = existingDepartment.departmentCode;

    const faculties = await faculty.find({ department });
    let helper;
    if (faculties.length < 10) {
      helper = "00" + faculties.length.toString();
    } else if (faculties.length < 100 && faculties.length > 9) {
      helper = "0" + faculties.length.toString();
    } else {
      helper = faculties.length.toString();
    }
    var date = new Date();
    var components = ["FAC", date.getFullYear(), departmentHelper, helper];

    var username = components.join("");
    let hashedPassword;
    const newDob = dob.split("-").reverse().join("-");

    hashedPassword = await bcrypt.hash(newDob, 10);
    var passwordUpdated = false;
    const newFaculty = await new faculty({
      name,
      email,
      password: hashedPassword,
      joiningYear,
      username,
      branch,
      contactNumber,
      dob,
      gender,
      designation,
      passwordUpdated,
    });
    await newFaculty.save();
    return res.status(200).json({
      success: true,
      message: "Faculty registerd successfully",
      response: newFaculty,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
