import student from "../../../models/student.js";
import connectDB from "../../../middlewares/mongoose.js";
import faculty from "../../../models/faculty.js";
import branch from "../../../models/branch.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import subject from "../../../models/subject";

const handler = async (req, res) => {
  try {
    const {
      name,
      dob,
      department,
      contactNumber,
      email,
      gender,
      year,
    } = req.body;
    const existingStudent = await student.findOne({ email });
    if (existingStudent) {
      errors.emailError = "Email already exists";
      return res.status(400).json(errors);
    }

    const existingDepartment = await branch.findOne({ department });
    let departmentHelper = existingDepartment.departmentCode;
    const students = await student.find({ branch })
    let helper;
    if (students.length < 10) {
      helper = "00" + students.length.toString();
    } else if (students.length < 100 && students.length > 9) {
      helper = "0" + students.length.toString();
    } else {
      helper = students.length.toString();
    }

    var date = new Date();
    var components = ["STU", date.getFullYear(), departmentHelper, helper];

    var rollNumber = components.join("");
    let hashedPassword;
    const newDob = dob.split("-").reverse().join("-");
    hashedPassword = await bcrypt.hash(newDob, 10);
    var passwordUpdated = false;

    const newStudent =new student({
      name,
      dob,
      password: hashedPassword,
      rollNumber,
      branch,
      contactNumber,
      email,
      gender,
      year,
      passwordUpdated,
    });
    await newStudent.save();

    const subjects = await subject.find({ department, year });
    console.log(department, subjects)
    if (subjects.length !== 0) {
      for (var i = 0; i < subjects.length; i++) {
        newStudent.subjects.push(subjects[i]._id);
      }
    }
    await newStudent.save();

    return res.status(200).json({
      success: true,
      message: "Student registerd successfully",
      response: newStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
