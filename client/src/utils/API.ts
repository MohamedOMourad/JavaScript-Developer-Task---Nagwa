import axios from "axios";
import { Question } from "../types";

const API = axios.create({ baseURL: `${process.env.REACT_APP_BASE_URL}` })

export const getTestQuestions = async (): Promise<Question[]> => {
    const res = await API.get('words');
    const data = await res.data;
    const testQuestions = await data.testQuestions;
    return testQuestions;
}

export const getRank = async (score: number): Promise<number> => {
    console.log(score)
    const res = await API.post('/rank', { score });
    const data = await res.data;
    const rank = await data.rank
    return rank;
}