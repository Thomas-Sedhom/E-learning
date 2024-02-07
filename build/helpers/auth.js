"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
let HashBass = (Password) => new Promise((resolve, reject) => bcrypt_1.default.genSalt(10, (err, salt) => {
    if (err)
        reject(err);
    else
        bcrypt_1.default.hash(Password, salt, (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
}));
exports.default = HashBass;
