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
const courseServices_1 = __importDefault(require("../Services/courseServices"));
class CourseController {
}
_a = CourseController;
CourseController.creatCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let professorId = req.params.professorId;
        const { title, description, image } = req.body;
        let course = { title, description, image, professorId };
        const courseData = yield courseServices_1.default.creatCourse(course);
        res.send(courseData);
    }
    catch (err) {
        console.log(err);
    }
});
CourseController.updateCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseId = req.params.courseId;
        const updateInfo = req.body;
        const courseData = yield courseServices_1.default.updateCourse(courseId, updateInfo);
        res.send(courseData);
    }
    catch (err) {
        console.log(err);
    }
});
CourseController.deleteCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseId = req.params.courseId;
        const courseData = yield courseServices_1.default.deleteCourse(courseId);
        res.send(courseData);
    }
    catch (err) {
        console.log(err);
    }
});
CourseController.getEnrolledStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseId = req.params.courseId;
        const EnrolledStudents = yield courseServices_1.default.getEnrolledStudents(courseId);
        const students = [...EnrolledStudents];
        res.json(students);
    }
    catch (err) {
        console.log(err);
    }
});
CourseController.assignNewStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseId = req.params.courseId;
        const userId = req.params.userId;
        const updatedCourseData = yield courseServices_1.default.assignNewStudent(userId, courseId);
        res.json(updatedCourseData);
    }
    catch (err) {
        console.log(err);
    }
});
CourseController.dropStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseId = req.params.courseId;
        const userId = req.params.userId;
        const updatedCourseData = yield courseServices_1.default.dropStudent(userId, courseId);
        res.json(updatedCourseData);
    }
    catch (err) {
        console.log(err);
    }
});
CourseController.getAllCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCourseData = yield courseServices_1.default.getAllCourses();
        res.json(updatedCourseData);
    }
    catch (err) {
        console.log(err);
    }
});
CourseController.getSpecificCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let courseId = req.params.courseId;
        const updatedCourseData = yield courseServices_1.default.getSpecificCourse(courseId);
        res.json(updatedCourseData);
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = CourseController;
