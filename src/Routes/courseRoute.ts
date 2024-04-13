import  express  from "express";
const courseRouter =  express.Router();
import CourseController from "../Controllers/courseController";

courseRouter.get("/", CourseController.getAllCourses);
courseRouter.get("/:courseId", CourseController.getSpecificCourse);
courseRouter.get("/:courseId/students", CourseController.getEnrolledStudents);

courseRouter.post("/create/:professorId", CourseController.creatCourse);
courseRouter.post("/:userId/:courseId/enroll", CourseController.assignNewStudent);

courseRouter.put("/:courseId", CourseController.updateCourse);

courseRouter.delete("/:courseId", CourseController.deleteCourse);
courseRouter.delete("/:userId/:courseId/drop", CourseController.dropStudent);

export default courseRouter;