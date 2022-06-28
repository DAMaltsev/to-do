import React from "react";
import TasksList from "../../components/TasksList/TasksList";
import { selectAllTodayTasks } from "../../store/tasks/selectors";

const TasksListContainer = () => {
    console.log(selectAllTodayTasks);
    return(
        <TasksList />
    )
}

export default TasksListContainer;