import subject from "../../../models/subject"
import connectDB from "../../../Middlewares/mongoose"

const handler = async (req, res) => {
    try {
        const {subjectCode, subjectName, instructorName, credits, department, totalLectures} = req.body
        await subject.save({
            subjectCode: subjectCode,
            subjectName: subjectName,
            department: department,
            credits: credits,
            year: year,
            instructorName: instructorName,
            totalLectures: totalLectures
        })
        res.json({message: "Subject created successfully..."}).status(200)
    } catch (error) {
        console.log(error)
        res.json(error).status(500)
    }
}

export default connectDB(handler)