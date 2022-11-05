import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:8000/' })

export const getTestQuestions = async () => {
    const res = await API.get('words');
    const data = await res.data;
    const testQuestions = await data.testQuestions;
    console.log(testQuestions)
    return testQuestions;
}