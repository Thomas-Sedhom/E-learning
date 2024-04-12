import mongoose, { Schema } from "mongoose";
import courseModel from "../Models/courseSchema";
import Course from "../Types/course";

class CourseServices{
    static creatCourse = async (course: Course) => {
        const courseData = await courseModel.create(course);
        return courseData;
    }

    static updateCourse =  async (courseId: Schema.Types.ObjectId, updateInfo: Object) => {
        const courseData = await courseModel.findByIdAndUpdate(courseId, updateInfo, {new: true});
        return courseData;
    }

    static deleteCourse = async (courseId: Schema.Types.ObjectId) => {
        const courseData = await courseModel.findByIdAndDelete(courseId);
        return courseData;
    }

    static getEnrolledStudents = async (courseId: Schema.Types.ObjectId) => {
        const courseData = await courseModel.findById(courseId);
        const students: [Schema.Types.ObjectId] | any =  courseData ? courseData.students:[]
        return students;
    }

    static assignNewStudent = async (userId: String| any, courseId: String | any ) => {
        const courseData: any = await courseModel.findById(courseId);
        // let students: [Schema.Types.ObjectId] | any =  courseData ? courseData.students:[]
        console.log("course data => "+courseData)
        courseData.students.push(userId);
        console.log(courseData)
        const updatedCourseData = await courseModel.findByIdAndUpdate(courseId, courseData)
        return updatedCourseData;
    }

    static dropStudent = async (userId: Schema.Types.ObjectId, courseId: Schema.Types.ObjectId ) => {
        const courseData:any = await courseModel.findById(courseId);
        courseData.students = courseData.students.filter(
            (student: Schema.Types.ObjectId ) => student != userId
            );
        const updatedCourseData = await courseModel.findByIdAndUpdate(courseId, courseData)
        return updatedCourseData;
    }

    static getAllCourses = async () => {
        const courseData = await courseModel.find();
        return courseData;
    }

    static getSpecificCourse = async (courseId: any) => {
        console.log(courseId)
        // const courseId = new mongoose.Types.ObjectId(courId)
        const courseData = await courseModel.findById(courseId);
        return courseData;
    }
}

export default CourseServices;
