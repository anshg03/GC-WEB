import admin from "../../../models/admin";
import connectDB from "../../../Middlewares/mongoose";

const handler = async (req, res) => {
    try {
        const { name, dob, department, contactNumber, avatar, email } = req.body;
        const updatedAdmin = await admin.findOne({ email });
        if (!updatedAdmin) {
            return res.status(404).json({
                message: "Admin does not exist",
                success: false
            })
        }
        updatedAdmin.name = name;
        updatedAdmin.dob = dob;
        updatedAdmin.department = department;
        updatedAdmin.contactNumber = contactNumber;
        updatedAdmin.avatar = avatar;
        await updatedAdmin.save()
        res.status(200).json({
            response: updatedAdmin,
            success: true,
            message: "Admin updated"
        });
    } catch (error) {
        const errors = { backendError: String };
        errors.backendError = error;
        res.status(500).json(errors);
    }
}

export default connectDB(handler)