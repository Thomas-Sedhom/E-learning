"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComparePass = exports.HashBass = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema_1 = require("../Models/userSchema");
const HashBass = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt_1.default.genSalt(10);
    const hash = yield bcrypt_1.default.hash(password, salt);
    return hash;
});
exports.HashBass = HashBass;
let ComparePass = (login) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("compare");
    let user = yield userSchema_1.UserModel.findOne({ Email: login.Email });
    console.log(user);
    if (user) {
        let HashB = yield bcrypt_1.default.compare(login.password, user.password);
        console.log(HashB, login.password, user.password);
        if (HashB)
            return user;
        throw Error("wrong password");
    }
    throw Error("wrong email");
});
exports.ComparePass = ComparePass;
