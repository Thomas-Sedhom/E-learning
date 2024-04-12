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
const bcrypt_middleware_1 = require("../Middlewares/bcrypt.middleware");
const JWT_middleware_1 = __importDefault(require("../Middlewares/JWT.middleware"));
const userServices_2 = __importDefault(require("../Services/userServices"));
class UserController {
}
_a = UserController;
UserController.register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("creat");
        const user = req.body;
        // user.password = await HashBass(user.password);
        const userData = yield userServices_1.default.creatUser(user);
        const token = yield JWT_middleware_1.default.creatToken(userData._id);
        console.log("after token");
        res.cookie("rsc", token, {
            httpOnly: true, maxAge: 60 * 60 * 60 * 1000
        });
        // console.log(req.cookies.jwt);
        res.status(200).json(userData);
    }
    catch (err) {
        res.status(err.status).json(err.message);
    }
});
UserController.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("login");
        const login = req.body;
        let validUser;
        validUser = yield (0, bcrypt_middleware_1.ComparePass)(login);
        const token = yield JWT_middleware_1.default.creatToken(validUser._id);
        res.cookie("rsc", token, {
            httpOnly: true, maxAge: 60 * 60 * 60 * 1000
        });
        res.status(200).json(validUser);
    }
    catch (err) {
        res.json(err.message);
    }
});
UserController.getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const userData = yield userServices_2.default.getUser(userId);
        res.send(userData);
    }
    catch (err) {
        return err;
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
UserController.logout = (req, res) => {
    try {
        res.clearCookie('rsc');
        res.status(200).redirect('/');
    }
    catch (err) {
        res.json(500).json(err);
    }
};
exports.default = UserController;
