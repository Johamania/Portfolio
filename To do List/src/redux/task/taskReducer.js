import {ADD_NEW_TASK, EDIT_TASK} from "./taskTypes";

const initialState = {
    tasks: [
        {id: 1, name: "task1", status: "open"}
    ]
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TASK :
            return {...state, tasks: [...state.tasks, action.payload]}
        case EDIT_TASK :
            const data = state.tasks.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        name: action.payload.name,
                        status: action.payload.status
                    }
                }
                return item
            })
            return {...state, tasks: data}
        default:
            return state
    }
}

export default taskReducer
