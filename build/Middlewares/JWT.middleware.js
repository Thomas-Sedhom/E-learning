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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userSchema_1 = require("../Models/userSchema");
let maxAge = 60 * 60 * 60 * 30;
class JwtAuth {
}
_a = JwtAuth;
JwtAuth.creatToken = (id) => {
    console.log("token");
    return jsonwebtoken_1.default.sign({ id }, "ss", {
        expiresIn: maxAge
    });
};
JwtAuth.authRequire = (req, res, next) => {
    let token = req.cookies.rsc;
    if (token) {
        jsonwebtoken_1.default.verify(token, "ss", (err, verifyJwt) => {
            if (err)
                res.redirect("http://localhost:3000/login");
            else
                next();
        });
    }
    else
        res.redirect("/user/login");
};
JwtAuth.checkUser = (req, res, next) => {
    let token = req.cookies.rsc;
    if (token) {
        jsonwebtoken_1.default.verify(token, "ss", (err, validToken) => __awaiter(void 0, void 0, void 0, function* () {
            if (err)
                res.locals.user = null;
            else
                res.locals.user = yield userSchema_1.UserModel.findById(validToken.id);
            next();
        }));
    }
    else {
        res.locals.user = null;
        next();
    }
};
exports.default = JwtAuth;
