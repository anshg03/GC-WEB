import bcrypt from "bcrypt"
import connectDB from "../../../Middlewares/mongoose"
import admin from "../../../models/admin"
import dotenv from "dotenv"
dotenv.config({path: "../../../.env.local"})

const handler = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        console.log("Enter valid details")
        res.status(400).json({
            success: false,
            message: "Invalid Credentials"
        })
    }
    try {
        const existingAdmin = await admin.findOne({ username });
        if (!existingAdmin) {
            errors.usernameError = "Admin doesn't exist.";
            return res.status(404).json(errors);
        }
        const isPasswordCorrect = await bcrypt.compare(
            password,
            existingAdmin.password
        );
        if (!isPasswordCorrect) {
            errors.passwordError = "Invalid Credentials";
            return res.status(404).json(errors);
        }
    
        const token = jwt.sign(
            {
            email: existingAdmin.email,
            id: existingAdmin._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.EXPIRATION_TIME }
        );
    
        res.status(200).json({ 
            adminToken: token,
            success: true,
            message: "Login Successful"
        });
        } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error
        })
    }
};

export default connectDB(handler)