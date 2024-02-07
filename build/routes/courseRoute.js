"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const courseRouter = express_1.default.Router();
const courseController_1 = __importDefault(require("../Controllers/courseController"));
courseRouter.get("/", courseController_1.default.getAllCourses);
courseRouter.get("/:courseId", courseController_1.default.getSpecificCourse);
courseRouter.get("/:courseId/students", courseController_1.default.getEnrolledStudents);
courseRouter.post("/create/:professorId", courseController_1.default.creatCourse);
courseRouter.post("/:userId/:courseId/enroll", courseController_1.default.assignNewStudent);
courseRouter.put("/:courseId", courseController_1.default.updateCourse);
courseRouter.delete("/:courseId", courseController_1.default.deleteCourse);
courseRouter.delete("/:userId/:courseId/drop", courseController_1.default.dropStudent);
exports.default = courseRouter;
