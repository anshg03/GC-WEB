//import subject from "../../../models/subject.js";
import faculty from "../../../models/faculty.js";
import connectDB from "../../../middleware/mongoose";
import attendance from "../../../models/attendance.js";

const handler = async (req, res) => {
  try {
    const { selectedStudents, subjectName, branch, year, section } = req.body;
    const sub = await subject.findOne({ subjectName });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
