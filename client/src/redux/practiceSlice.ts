import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "../types";

type Result = {
    questions: Question[],
    correctAnswers: number,
    score: number,
    rank: number
}

const initialState: Result = {
    questions: [],
    correctAnswers: 0,
    score: 0,
    rank: 0
};

export const practiceSlice = createSlice({
    name: "socketConnection",
    initialState,
    reducers: {
        setQuestions: (state, action: PayloadAction<Question[]>) => {
            state.questions = action.payload
        },
        setCorrectAnswers: (state, action: PayloadAction<number>) => {
            state.correctAnswers += action.payload
        },
        setScore: (state) => {
            state.score = state.correctAnswers / state.questions.length * 100 || 0
        },
        SetRank: (state, action: PayloadAction<number>) => {
            state.rank = action.payload
        },
        resetResult: (state) => {
            state.correctAnswers = 0;
            state.score = 0;
            state.rank = 0;
        },
    },
});

export const { setQuestions, setCorrectAnswers, setScore, SetRank, resetResult } = practiceSlice.actions;
export default practiceSlice.reducer;
