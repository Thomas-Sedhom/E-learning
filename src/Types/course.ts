import { Schema } from "mongoose"

type Course = {
    title: String,
    description: String,
    image: String,
    professorId: Schema.Types.ObjectId,
}

export default Course;