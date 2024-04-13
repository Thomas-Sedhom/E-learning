import express from "express";
import UserController from "../Controllers/userController";
let userRouter = express.Router();

userRouter.post("/signup",UserController.register);
userRouter.post("/login",UserController.login);
userRouter.get("/:userId",UserController.getUser);
userRouter.put("/:userId",UserController.updateUser);
userRouter.delete("/:userId",UserController.deleteUser);
userRouter.get("/logout",UserController.logout);

export default userRouter;