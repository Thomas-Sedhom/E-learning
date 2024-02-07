import {Request, Response} from "express";
import CourseServices from "../Services/courseServices";
import { Schema } from "mongoose";
import Course from "../Types/course";

class CourseController{
    static creatCourse = async (req: Request, res: Response) => {
        try
        {
            let professorId: Schema.Types.ObjectId | any = req.params.professorId;
            const {title, description, image} = req.body;
            let course: Course = {title, description, image, professorId}
            const courseData = await CourseServices.creatCourse(course)
            res.send(courseData);
        }catch(err){
            console.log(err);
        }
    }

    static updateCourse = async (req: Request, res: Response) => {
        try{
            const courseId: Schema.Types.ObjectId | any = req.params.courseId;
            const updateInfo = req.body;
            const courseData = await CourseServices.updateCourse(courseId, updateInfo);
            res.send(courseData);
        }catch(err){
            console.log(err);
        }
    }

    static deleteCourse = async (req: Request, res: Response) => {
        try{
            const courseId: Schema.Types.ObjectId | any = req.params.courseId;
            const courseData = await CourseServices.deleteCourse(courseId);
            res.send(courseData)
        }catch(err){
            console.log(err);
        }
    }

    static getEnrolledStudents = async (req: Request, res: Response) => {
        try{
            const courseId : Schema.Types.ObjectId | any = req.params.courseId;
            const EnrolledStudents = await CourseServices.getEnrolledStudents(courseId);
            const students = [... EnrolledStudents];
            res.json(students);
        }catch(err){
            console.log(err);
        }
    }

    static assignNewStudent = async (req: Request, res: Response) => {
        try{
            const courseId : Schema.Types.ObjectId | any = req.params.courseId;
            const userId: Schema.Types.ObjectId | any = req.params.userId;
            const updatedCourseData = await CourseServices.assignNewStudent(userId, courseId);
            res.json(updatedCourseData);
        }catch(err){
            console.log(err);
        }
    }

    static dropStudent = async (req: Request, res: Response) => {
        try{
            const courseId : Schema.Types.ObjectId | any = req.params.courseId;
            const userId: Schema.Types.ObjectId| any = req.params.userId;
            const updatedCourseData = await CourseServices.dropStudent(userId, courseId);
            res.json(updatedCourseData);
        }catch(err){
            console.log(err);
        }
    }

    static getAllCourses = async (req: Request, res: Response) => {
        try{
            const updatedCourseData = await CourseServices.getAllCourses();
            res.json(updatedCourseData);
        }catch(err){
            console.log(err);
        }
    }

    static getSpecificCourse = async (req: Request, res: Response) => {
        try{
            let courseId: Schema.Types.ObjectId | any = req.params.courseId;
            const updatedCourseData = await CourseServices.getSpecificCourse(courseId);
            res.json(updatedCourseData);
        }catch(err){
            console.log(err);
        }
    }
}

export default CourseController;