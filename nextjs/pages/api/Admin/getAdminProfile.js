import admin from "../../../models/admin";
import connectDB from "../../../middlewares/mongoose";
import jwt from "jsonwebtoken";

const handler = (req, res) => {
    const {token} = req.body
    try {
        const adminToken = jwt.decode(token, process.env.JWT_SECRET);
        const existingAdmin = admin.findOne({email: adminToken.email}) 
        if (!existingAdmin) {
            return res.status(404).json({
                success: false,
                message: "Admin not found"
            })
        }   
        res.status(200).json({
            success: true,
            message: "Admin details",
            admin: existingAdmin
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Error Occured"
        })
    }
}

export default connectDB(handler)