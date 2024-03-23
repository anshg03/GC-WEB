import faculty from "../../../models/subject";
import connectDB from "../../../Middlewares/mongoose";
import admin from "../../../models/admin";

const handler = async(req, res) => {
    const {instructorEmail, adminEmail} = req.body
    try {
        const existingAdmin = await admin.find({email: adminEmail})
        if (!existingAdmin) {
            res.status(401).json({
                success: false,
                message: "Unauthorized access request"
            })
        }
        await faculty.findOneAndDelete({email: instructorEmail})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "error occured",
            success: false,
            response: error
        })
    }
}

export default connectDB(handler)