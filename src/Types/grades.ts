import {Schema, Types} from "mongoose";

type Grades = {
    Email: String
    studentId:Types.ObjectId,
    courseId: Types.ObjectId,
    courseTitle: String,
    grade: Number,
    feedback: String,
}

export default Grades;