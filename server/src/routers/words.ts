import { Router } from "express";
import { getTestQuestions } from "../model/Word";

const words = Router();

words.get('/', (req, res) => {
    try {
        const testQuestions = getTestQuestions();
        res.status(200).json({ testQuestions })
    } catch (error) {
        res.status(500).json({ message: 'server down' })
    }
})

export default words;
