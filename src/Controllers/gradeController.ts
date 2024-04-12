import { Request, Response } from "express";
import GradeServices from "../Services/gradeServices"
import Grades from "../Types/grades";
import {Schema, Types} from "mongoose";
import gradeServices from "../Services/gradeServices";
class GradeController{
    static assign = async (req: Request, res: Response) => {
        try
        {
            const grades: Grades = req.body;
            const getStudentID: Types.ObjectId | any = await gradeServices.getStudentIdByEmail(grades.Email);
            grades.studentId = getStudentID;
            console.log(grades)
            const userData = await GradeServices.assign(grades)
            res.send(userData)
        }catch(err){
            console.log(err);
        }
    }
    static getStudentGrades = async (req: Request, res: Response) => {
        try
        {
            const studentId: Schema.Types.ObjectId | any = req.params.studentId;
            const courseId: Schema.Types.ObjectId | any = req.params.courseId;
            const userData = await GradeServices.studentGrades(studentId, courseId)
            res.send(userData)
        }catch(err){
            console.log(err);
        }
    }
    static getAverageGrades = async (req: Request, res: Response) => {
        try
        {
            const courseId: Schema.Types.ObjectId | any = req.params.courseId;
            const userData = await GradeServices.averageGrades(courseId)
            res.send(userData)
        }catch(err){
            console.log(err);
        }
    }
}

export default GradeController;
