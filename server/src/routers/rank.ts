import { Router } from "express";
import { getRank } from "../model/Score";

const rank = Router();

rank.post('/', (req, res) => {
    try {
        const {score} = req.body;
        const rank = getRank(score);
        res.status(200).json({ rank })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'bad request' })
    }

})
export default rank;