import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter-slice";
import userSlice from "../features/user-slice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        user: userSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>