import  express  from "express";
const gradeRouter =  express.Router();
import GradesController from "../Controllers/gradeController";

gradeRouter.post("/assign", GradesController.assign);

gradeRouter.get("/:studentId", GradesController.getStudentGrades);

gradeRouter.get("/:courseId/average", GradesController.getAverageGrades);

gradeRouter.get("/:studentId/:courseId?", GradesController.getStudentGrades);

export default gradeRouter;
