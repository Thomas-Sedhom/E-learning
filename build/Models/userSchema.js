"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiVal = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
let userSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
let JoiVal = joi_1.default.object({
    firstName: joi_1.default.string().required,
    lastName: joi_1.default.string().required,
    Email: joi_1.default.string().email().required,
    password: joi_1.default.string().required,
});
exports.JoiVal = JoiVal;
const UserModel = mongoose_1.default.model("users", userSchema);
exports.UserModel = UserModel;
