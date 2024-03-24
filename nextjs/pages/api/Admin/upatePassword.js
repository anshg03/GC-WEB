import admin from "../../../models/admin";
import connectDB from "../../../middlewares/mongoose";

const handler = async (req, res) => {
    try {
        const { newPassword, confirmPassword, email } = req.body;
        if (newPassword !== confirmPassword) {
          return res.status(400).json(errors);
        }
        const admin = await admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({
                message: "The admin does not exist"
            })
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        admin.password = hashedPassword;
        await admin.save();
        if (admin.passwordUpdated === false) {
          admin.passwordUpdated = true;
          await admin.save();
        }
    
        res.status(200).json({
          success: true,
          message: "Password updated successfully",
          response: admin,
        });
    } catch (error) {
        const errors = { backendError: String };
        errors.backendError = error;
        res.status(500).json(errors);
    }   
}

export default connectDB(handler)