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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const userServices_1 = __importDefault(require("../Services/userServices"));
const auth_1 = __importDefault(require("../helpers/auth"));
class UserController {
}
_a = UserController;
UserController.register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("register");
        const user = req.body;
        let pass = yield (0, auth_1.default)(user.password);
        user.password = pass;
        const userData = yield userServices_1.default.creatUser(user);
        console.log(55);
        res.send(userData);
    }
    catch (err) {
        console.log(err);
    }
});
UserController.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const updateInfo = req.body;
        const userData = yield userServices_1.default.updateUser(userId, updateInfo);
        res.send(userData);
    }
    catch (err) {
        console.log(err);
    }
});
UserController.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const userData = yield userServices_1.default.deleteUser(userId);
        res.send(userData);
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = UserController;
