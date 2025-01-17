import mongoose, {Model} from "mongoose";
import joi, {string} from "joi";
import {UserTypeEnum} from "../Enums/UserType.enum";
import Login from "../Types/login";
import bcrypt from "bcrypt";
import express from 'express'


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
});
 const UserModel = mongoose.model("users", userSchema);

export {UserModel, JoiVal};
