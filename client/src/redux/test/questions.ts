import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "../../types";

const initialState: { questions: Question[], } = {
    questions: []
};

export const socketConnection = createSlice({
    name: "socketConnection",
    initialState,
    reducers: {
        setQuestions: (state, action: PayloadAction<Question[]>) => {
            state.questions = action.payload
        },
    },
});

export const { setQuestions } = socketConnection.actions;
export default socketConnection.reducer;
