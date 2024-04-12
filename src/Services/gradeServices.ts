import mongoose, { Schema } from "mongoose";
import GradeModel from "../Models/gradeSchema";
import Grades from "../Types/grades";
import CourseServices from "./courseServices";
import UserServices from "./userServices";
import {UserModel} from "../Models/userSchema";

class GradeServices{
    static getStudentIdByEmail = async (Email: String) => {
        try{
            const studentData = await UserModel.findOne({Email})
            if(studentData)
                return studentData._id;
        }catch (err){
            console.log(err);
        }
    }
    static assign = async (grades: Grades) => {
        let newGrade = await GradeModel.create(grades);
        return newGrade;
    }
    static studentGrades = async (studentId: String, courseId?: String) => {
        let newGrade: any;
        if(courseId)
            newGrade = await GradeModel.find({studentId, courseId});
        else
            newGrade = await GradeModel.find({studentId});
        return newGrade ;
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