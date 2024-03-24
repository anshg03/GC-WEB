import mongoose from "mongoose";

const { Schema } = mongoose;

const solutionSchema = new Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
  },
});

const Solution = mongoose.model("solution", solutionSchema);

export default Solution;
