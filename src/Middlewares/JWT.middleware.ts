import jwt from 'jsonwebtoken';
import {UserModel} from "../Models/userSchema";
import {Request, Response} from "express";

let maxAge: number = 60*60*60*30;

class JwtAuth{
    static creatToken  = (id: String|any) => {
        console.log("token");
        return jwt.sign({id}, "ss", {
            expiresIn: maxAge
        })
    }
    static authRequire = (req: Request, res: Response, next: any) => {
        let token = req.cookies.rsc;
        if (token) {
            jwt.verify(token, "ss", (err: Error, verifyJwt) => {
                if (err) res.redirect("http://localhost:3000/login");
                else next();
            });
        } else res.redirect("/user/login");
    };
    static checkUser = (req: Request, res: Response, next: any) => {
        let token = req.cookies.rsc;
        if (token) {
            jwt.verify(token, "ss", async (err: Error, validToken) => {
                if (err)
                    res.locals.user = null;
                else
                    res.locals.user = await UserModel.findById(validToken.id);
                next();
            });
        } else {
            res.locals.user = null;
            next();
        }
    };
}
export default JwtAuth;


