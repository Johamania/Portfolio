import { type } from "@testing-library/user-event/dist/type";
import {ADD_NEW_TASK, DELETE_TASK, EDIT_TASK} from "./taskTypes";

export const addNewTask = (data) => {
    return {
        type: ADD_NEW_TASK,
        payload: data
    }
}
export const editTask = (data) => {
    return {
        type: EDIT_TASK,
        payload: data
    }
}

export const deleteTask = (data) => {
    return {
        type: DELETE_TASK,
        payload: data
    }
}

export const selectTask = (state) => state.taskReducer.tasks
