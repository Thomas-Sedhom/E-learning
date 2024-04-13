import {UserTypeEnum} from "../Enums/UserType.enum";

type User = {
    firstName: String,
    lastName: String ,
    Email: String,
    password: String,
    role: UserTypeEnum,
} 

export default User;