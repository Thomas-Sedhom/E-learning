import mongoose from "mongoose"
import express, { Request, Response } from "express"
require("dotenv").config();
import courseRoute from "./routes/courseRoute";
import gradeRoute from "./routes/gradesRoute";
import userRouter from "./routes/UserRoute";

let app = express();
app.use(express.json())

let url : String | any = process.env.DATABSE_URL
let dataBases = mongoose.connect(url)
  .then(() => console.log("connect database successfully"))
  .catch(error => console.log(error))


app.use("/courses", courseRoute)
app.use("/grades", gradeRoute)
app.use("/user", userRouter)

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

app.listen(process.env.PORT || 3000 , () => 
  console.log(`app work on port`, process.env.PORT || 3000)
)