import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "../types";

const initialState: { questions: Question[], score: number, rank: number } = {
    questions: [],
    score: 0,
    rank: 0
};

export const practice = createSlice({
    name: "socketConnection",
    initialState,
    reducers: {
        setQuestions: (state, action: PayloadAction<Question[]>) => {
            state.questions = action.payload
        },
        setScore: (state, action: PayloadAction<number>) => {
            state.score = state.score + action.payload
        },
        SetRank: (state, action: PayloadAction<number>) => {
            state.rank = action.payload
        },
    },
});

export const { setQuestions, setScore, SetRank } = practice.actions;
export default practice.reducer;
