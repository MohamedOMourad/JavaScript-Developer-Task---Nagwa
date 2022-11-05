import express, { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import wordsRouter from './routers/words'
const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use("/words", wordsRouter);

app.get('*', (req, res) => {
    res.status(404).json({ message: "incorrect end point" })
})


app.listen(8000, () => {
    console.log("server is running on port: 8000")
})