import mongoose, { Schema } from "mongoose";
import {string} from "joi";

let gradeSchema = new mongoose.Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        require: true
    },
    courseId: {
        type: Schema.Types.ObjectId,
        require: true
    },
    courseTitle: {
        type: String,
        require: true
    },
    grade: {
        type: Number,
        require: true,
        minlength: 0,
        maxlength: 100,
    },
    feedback: {
        type: String,
    },
    createdAt: {
        type: Date
    }
});

let GradeModel = mongoose.model("grades", gradeSchema);

export default GradeModel;

