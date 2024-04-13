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
const gradeServices_1 = __importDefault(require("../Services/gradeServices"));
const gradeServices_2 = __importDefault(require("../Services/gradeServices"));
class GradeController {
}
_a = GradeController;
GradeController.assign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const grades = req.body;
        const getStudentID = yield gradeServices_2.default.getStudentIdByEmail(grades.Email);
        grades.studentId = getStudentID;
        console.log(grades);
        const userData = yield gradeServices_1.default.assign(grades);
        res.send(userData);
    }
    catch (err) {
        console.log(err);
    }
});
GradeController.getStudentGrades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentId = req.params.studentId;
        const courseId = req.params.courseId;
        const userData = yield gradeServices_1.default.studentGrades(studentId, courseId);
        res.send(userData);
    }
    catch (err) {
        console.log(err);
    }
});
GradeController.getAverageGrades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseId = req.params.courseId;
        const userData = yield gradeServices_1.default.averageGrades(courseId);
        res.send(userData);
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = GradeController;
