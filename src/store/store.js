import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasks";

const rootReducer = (state, action) => ({
    tasks: tasksSlice.reducer(state?.task, action)
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });

