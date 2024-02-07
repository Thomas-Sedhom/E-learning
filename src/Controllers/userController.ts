import {Request, Response} from "express";
import UserServices from "../Services/userServices";
import User from "../Types/user";
import HashBass from "../helpers/auth";


class UserController{
    static register = async (req: Request, res: Response) => {
        try
        {
            console.log("register")
            const user: User = req.body;
            let pass: any = await HashBass(user.password);
            user.password = pass;
            const userData = await UserServices.creatUser(user)
            console.log(55)
            res.send(userData)
        }catch(err){
            console.log(err);
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
}
export default UserController;
