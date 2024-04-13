import {UserModel, JoiVal} from "../Models/userSchema";
import User from "../Types/user";
import {HashBass, ComparePass} from "../Middlewares/bcrypt.middleware";

class UserServices{
    static creatUser = async (user: User) => {
        let hash:any = await HashBass(user.password);

        if(hash)
            user.password = hash;

        const value = JoiVal.validate(user)
        console.log(user.firstName, user.lastName,user.Email, user.password, user.role)

        console.log("services")
        const userData = await UserModel.create(user);
        return userData;
    }

    static getUser = async (userId: string) => {
        const userData = await UserModel.findById(userId);
        return userData;
    }

    static updateUser =  async (userId: String, updateInfo: Object) => {
        const userData = await UserModel.findByIdAndUpdate(userId, updateInfo, {new: true});
        return userData;
    }

    static deleteUser = async (userId: String) => {
        const userData = await UserModel.findByIdAndDelete(userId);
        return userData;
    }
}

export default UserServices;
