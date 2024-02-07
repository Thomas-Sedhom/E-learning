"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../Controllers/userController"));
let userRouter = express_1.default.Router();
userRouter.post("/creat", userController_1.default.register);
userRouter.put("/:userId", userController_1.default.updateUser);
userRouter.delete("/:userId", userController_1.default.deleteUser);
exports.default = userRouter;
