import {Request, Response} from "express";
import UserServices from "../Services/userServices";
import User from "../Types/user";
import {HashBass, ComparePass} from "../Middlewares/bcrypt.middleware";
import JwtAuth from '../Middlewares/JWT.middleware'
import Login from "../Types/login";
import {UserModel} from "../Models/userSchema";
import userServices from "../Services/userServices";
class UserController{
    static register = async (req: Request, res: Response) => {
        try
        {
            console.log("creat");
            const user: User = req.body;
            // user.password = await HashBass(user.password);
            const userData = await UserServices.creatUser(user)
            const token = await JwtAuth.creatToken(userData._id);
            console.log("after token");
            res.cookie("rsc", token, {
                httpOnly: true, maxAge: 60*60*60*1000
            } )
            // console.log(req.cookies.jwt);
            res.status(200).json(userData)
        }catch(err: any){
            res.status(err.status).json(err.message)
        }
    }
    static login = async (req: Request, res: Response) => {
        try
        {
            console.log("login");
            const login: Login = req.body;
            let validUser: any;
            validUser = await ComparePass(login);
            const token = await JwtAuth.creatToken(validUser._id);
            res.cookie("rsc", token, {
                httpOnly: true, maxAge: 60*60*60*1000
            } )
            res.status(200).json(validUser)
        }catch(err: any){
            res.json(err.message)
        }
    }
    static getUser = async (req: Request, res: Response) => {
        try{
            const userId: string = req.params.userId;
            const userData = await userServices.getUser(userId);
            res.send(userData);
        }catch (err){
            return err;
        }
    }
    static updateUser = async (req: Request, res: Response) => {
        try{
            const userId: String = req.params.userId;
            const updateInfo = req.body;
            const userData = await UserServices.updateUser(userId, updateInfo);
            res.send(userData);
        }catch(err){
            console.log(err);
        }
    }
    static deleteUser = async (req: Request, res: Response) => {
        try{
            const userId: String = req.params.userId;
            const userData = await UserServices.deleteUser(userId);
            res.send(userData);
        }catch(err){
            console.log(err);
        }
    }
    static logout = (req: Request, res: Response) => {
        try {
            res.clearCookie('rsc');
            res.status(200).redirect('/');
        } catch (err) {
            res.json(500).json(err);
        }
    }
}
export default UserController;
