import mongoose from "mongoose";
import joi from "joi";

let userSchema = new mongoose.Schema({
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
        default: "student"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

let JoiVal = joi.object({
    firstName: joi.string().required,
    lastName: joi.string().required,
    Email: joi.string().email().required,
    password: joi.string().required,
    role: joi.string().required
});

let UserModel = mongoose.model("users", userSchema);

export {UserModel, JoiVal};
