import { Schema } from "mongoose";
import GradeModel from "../Models/gradeSchema";
import Grades from "../Types/grades";

class GradeServices{
    static assign = async (grades: Grades) => {
        let newGrade = await GradeModel.create(grades);
        return newGrade;
    }

    static studentGrades = async (studentId: Schema.Types.ObjectId, courseId?: Schema.Types.ObjectId) => {
        let newGrade: any;
        if(courseId)
            newGrade = await GradeModel.find({studentId, courseId});
        else
            newGrade = await GradeModel.find({studentId});
        return newGrade;
    }

    static averageGrades = async (courseId: Schema.Types.ObjectId) => {
        let average = await GradeModel.aggregate([
            {
                $group: {
                    _id: courseId,
                    average: {$avg: "$grade"}
                }
            }
        ])
        return average[0];
    }
}

export default GradeServices;