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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_1 = require("../Models/userSchema");
const bcrypt_middleware_1 = require("../Middlewares/bcrypt.middleware");
class UserServices {
}
_a = UserServices;
UserServices.creatUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    let hash = yield (0, bcrypt_middleware_1.HashBass)(user.password);
    if (hash)
        user.password = hash;
    const value = userSchema_1.JoiVal.validate(user);
    console.log(user.firstName, user.lastName, user.Email, user.password, user.role);
    console.log("services");
    const userData = yield userSchema_1.UserModel.create(user);
    return userData;
});
UserServices.getUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield userSchema_1.UserModel.findById(userId);
    return userData;
});
UserServices.updateUser = (userId, updateInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield userSchema_1.UserModel.findByIdAndUpdate(userId, updateInfo, { new: true });
    return userData;
});
UserServices.deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield userSchema_1.UserModel.findByIdAndDelete(userId);
    return userData;
});
exports.default = UserServices;
