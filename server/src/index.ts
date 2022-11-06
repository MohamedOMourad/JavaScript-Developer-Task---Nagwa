import express, { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import wordsRouter from './routers/words'
import rankRouter from './routers/rank'
const app = express();

app.use(cors({
    origin: ["http://localhost:3000","https://java-script-developer-task-nagwa.vercel.app"]
}))
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use("/words", wordsRouter);
app.use("/rank", rankRouter);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Server Running" })
})
app.get('*', (req, res) => {
    res.status(404).json({ message: "incorrect end point" })
})


app.listen(8000, () => {
    console.log("server is running on port: 8000")
})