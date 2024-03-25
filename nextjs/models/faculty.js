import mongoose from "mongoose";
const { Schema } = mongoose;
const facultySchema =new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  username: {
    type: String,
  },
  gender: {
    type: String,
  },
  designation: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
  },
  dob: {
    type: String,
    required: true,
  },
  joiningYear: {
    type: Number,
    required: true,
  },
  passwordUpdated: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("faculty", facultySchema);