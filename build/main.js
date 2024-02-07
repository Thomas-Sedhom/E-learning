"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const courseRoute_1 = __importDefault(require("./routes/courseRoute"));
const gradesRoute_1 = __importDefault(require("./routes/gradesRoute"));
const UserRoute_1 = __importDefault(require("./routes/UserRoute"));
let app = (0, express_1.default)();
app.use(express_1.default.json());
let url = process.env.DATABSE_URL;
let dataBases = mongoose_1.default.connect(url)
    .then(() => console.log("connect database successfully"))
    .catch(error => console.log(error));
app.use("/courses", courseRoute_1.default);
app.use("/grades", gradesRoute_1.default);
app.use("/user", UserRoute_1.default);
app.all('*', (req, res, next) => res.json({ status: "ERROR", data: { msg: "Not Found Url" } }).status(404));
app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        status: "ERROR",
        data: { msg: error.message },
        code: error.code || 500
    });
});
app.listen(process.env.PORT || 3000, () => console.log(`app work on port`, process.env.PORT || 3000));
