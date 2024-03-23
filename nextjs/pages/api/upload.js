import student from "../../../models/student.js";
import connectDB from "../../../middleware/mongoose";
import faculty from "../../../models/faculty.js";
import branch from "../../../models/branch.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import test from "../../../models/test";

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_SECRET,
});

const handler = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: 'No files were uploaded.' });
    }
    const file = req.files.file;

    cloudinary.uploader.upload(file.tempFilePath, (error, result) => {
      if (error) {
        console.error('Error uploading file to Cloudinary:', error);
        return res.status(500).json({ message: 'Error uploading file.' });
      }
      console.log('File uploaded successfully to Cloudinary:', result);
      res.status(200).json({ message: 'File uploaded successfully.', url: result.url });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
