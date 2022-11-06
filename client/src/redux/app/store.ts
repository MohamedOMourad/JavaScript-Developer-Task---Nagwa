import { configureStore } from "@reduxjs/toolkit";
import practice from "../practiceSlice";

export const store = configureStore({
    reducer: {
        practice
    },

});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch