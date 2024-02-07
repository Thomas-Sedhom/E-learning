import { Schema } from "mongoose";

type Grades = {
    studentId: Schema.Types.ObjectId,
    courseId: Schema.Types.ObjectId,
    grade: Number,
    feedback: String,
}

export default Grades;