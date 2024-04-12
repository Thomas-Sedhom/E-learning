import mongoose from "mongoose"
import express, { Request, Response } from "express"
require("dotenv").config();
import courseRoute from "./Routes/courseRoute";
import gradeRoute from "./Routes/gradesRoute";
import userRouter from "./Routes/UserRoute";
import JwtAuth from "./Middlewares/JWT.middleware";
const cookieParser = require("cookie-parser")
import cors from "cors"

let app = express();
app.use(express.json())
app.use(cookieParser());
app.use(cors())

let url : String | any = process.env.DATABSE_URL
let dataBases = mongoose.connect(url)
  .then(() => console.log("connect database successfully"))
  .catch(error => console.log(error))

app.use("/api/v1/courses", courseRoute)
app.use("/api/v1/grades", gradeRoute)
app.use("/api/v1/user", userRouter)

app.all('*', (req:Request, res: Response, next) => 
    res.json({status: "ERROR", data: {msg:"Not Found Url"}}).status(404)
)

app.use((error,req:Request, res: Response,next) => {
    return res.status(error.statusCode || 500).json({
        status: "ERROR",
        data: {msg:error.message},
        code:  error.code || 500
    })
})
app.listen(process.env.PORT || 5000 , () => 
  console.log(`app work on port`, process.env.PORT || 5000)
)