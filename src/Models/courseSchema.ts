import mongoose, { Schema } from "mongoose";

let courseSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    professorId: {
        type: Schema.Types.ObjectId,
        require: true,
    },
    professorName: {
        type: String,
        require: true,
    },
    students: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

let CourseModel = mongoose.model("courses", courseSchema);

export default CourseModel;

