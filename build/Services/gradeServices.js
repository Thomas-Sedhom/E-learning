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
const gradeSchema_1 = __importDefault(require("../Models/gradeSchema"));
const userSchema_1 = require("../Models/userSchema");
class GradeServices {
}
_a = GradeServices;
GradeServices.getStudentIdByEmail = (Email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentData = yield userSchema_1.UserModel.findOne({ Email });
        if (studentData)
            return studentData._id;
    }
    catch (err) {
        console.log(err);
    }
});
GradeServices.assign = (grades) => __awaiter(void 0, void 0, void 0, function* () {
    let newGrade = yield gradeSchema_1.default.create(grades);
    return newGrade;
});
GradeServices.studentGrades = (studentId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
    let newGrade;
    if (courseId)
        newGrade = yield gradeSchema_1.default.find({ studentId, courseId });
    else
        newGrade = yield gradeSchema_1.default.find({ studentId });
    return newGrade;
});
GradeServices.averageGrades = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    let average = yield gradeSchema_1.default.aggregate([
        {
            $group: {
                _id: courseId,
                average: { $avg: "$grade" }
            }
        }
    ]);
    return average[0];
});
exports.default = GradeServices;
