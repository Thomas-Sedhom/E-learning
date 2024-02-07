import bcrypt from "bcrypt";

let HashBass = (Password: String | any) => new Promise((resolve, reject) => 
    bcrypt.genSalt(10, (err, salt) =>{
        if(err)
            reject(err);
        else 
            bcrypt.hash(Password, salt, (err, result) => {
                if(err)
                    reject(err);
                else 
                    resolve(result)
        })
    })
)

export default HashBass;