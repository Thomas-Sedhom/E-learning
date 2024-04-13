"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const courseSchema_1 = __importDefault(require("../Models/courseSchema"));
class CourseServices {
}
_a = CourseServices;
CourseServices.creatCourse = (course) => __awaiter(void 0, void 0, void 0, function* () {
    const courseData = yield courseSchema_1.default.create(course);
    return courseData;
});
CourseServices.updateCourse = (courseId, updateInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const courseData = yield courseSchema_1.default.findByIdAndUpdate(courseId, updateInfo, { new: true });
    return courseData;
});
CourseServices.deleteCourse = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    const courseData = yield courseSchema_1.default.findByIdAndDelete(courseId);
    return courseData;
});
CourseServices.getEnrolledStudents = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    const courseData = yield courseSchema_1.default.findById(courseId);
    const students = courseData ? courseData.students : [];
    return students;
});
CourseServices.assignNewStudent = (userId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
    const courseData = yield courseSchema_1.default.findById(courseId);
    // let students: [Schema.Types.ObjectId] | any =  courseData ? courseData.students:[]
    console.log("course data => " + courseData);
    courseData.students.push(userId);
    console.log(courseData);
    const updatedCourseData = yield courseSchema_1.default.findByIdAndUpdate(courseId, courseData);
    return updatedCourseData;
});
CourseServices.dropStudent = (userId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
    const courseData = yield courseSchema_1.default.findById(courseId);
    courseData.students = courseData.students.filter((student) => student != userId);
    const updatedCourseData = yield courseSchema_1.default.findByIdAndUpdate(courseId, courseData);
    return updatedCourseData;
});
CourseServices.getAllCourses = () => __awaiter(void 0, void 0, void 0, function* () {
    const courseData = yield courseSchema_1.default.find();
    return courseData;
});
CourseServices.getSpecificCourse = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(courseId);
    // const courseId = new mongoose.Types.ObjectId(courId)
    const courseData = yield courseSchema_1.default.findById(courseId);
    return courseData;
});
exports.default = CourseServices;
