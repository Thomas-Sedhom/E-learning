import bcrypt from "bcrypt";
import {UserModel} from '../Models/userSchema'
import Login from "../Types/login";
const HashBass = async (password: string|any) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};
let ComparePass = async (login: Login) => {
    console.log("compare");
    let user: any = await UserModel.findOne({Email: login.Email});
    console.log(user);
    if(user){
       let HashB = await bcrypt.compare(login.password, user.password);
       console.log(HashB, login.password, user.password );
       if(HashB)
           return user
        throw Error("wrong password")
    }
    throw Error ("wrong email")
}

export {HashBass, ComparePass}