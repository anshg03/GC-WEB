import subject from "../../../models/subject";
import connectDB from "../../../Middlewares/mongoose";
import student from "../../../models/student";
const handler = async (req, res) => {
  try {
    const {
      subjectCode,
      subjectName,
      instructorName,
      credits,
      department,
      totalLectures,
    } = req.body;
    const newSubject =new subject({
      subjectCode: subjectCode,
      subjectName: subjectName,
      department: department,
      credits: credits,
      year: year,
      instructorName: instructorName,
      totalLectures: totalLectures,
    });
    await newSubject.save();
    const students = await student.find({ department, year });
    if (students.length !== 0) {
      for (var i = 0; i < students.length; i++) {
        students[i].subjects.push(newSubject._id);
        await students[i].save();
      }
    }
    return res.status(200).json({
      success: true,
      message: "Subject added successfully",
      response: newSubject,
    });
  } catch (error) {
    console.log(error);
    res.json(error).status(500);
  }
};

export default connectDB(handler);
