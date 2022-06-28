import { createSlice } from "@reduxjs/toolkit";
import { normalizedTasks } from "../../contstants/fixtures";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
            entities: normalizedTasks.reduce((acc, task) => {
                acc[task.id] = task;
                return acc;
            }, {})
        }
})

export default tasksSlice;