"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gradeRouter = express_1.default.Router();
const gradeController_1 = __importDefault(require("../Controllers/gradeController"));
gradeRouter.post("/assign", gradeController_1.default.assign);
gradeRouter.get("/:studentId", gradeController_1.default.getStudentGrades);
gradeRouter.get("/:courseId/average", gradeController_1.default.getAverageGrades);
// gradeRouter.get("/:studentId/:courseId?", GradesController.getStudentGrades);
exports.default = gradeRouter;
