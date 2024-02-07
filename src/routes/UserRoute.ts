import express from "express";
import UserController from "../Controllers/userController";
let userRouter = express.Router();

userRouter.post("/creat",UserController.register);

userRouter.put("/:userId",UserController.updateUser);

userRouter.delete("/:userId",UserController.deleteUser);

export default userRouter;