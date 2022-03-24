import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TasksItemProps, TasksTypes} from "../../types/tasksTypes";

const initialState: TasksTypes = {
    taskList: []
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask: (state, {payload}: PayloadAction<TasksItemProps>) => {
            return {
                ...state,
                taskList: [...state.taskList, payload]
            }
        },
        setDragTaskListActions: (state, {payload}: PayloadAction<any>) => {
            return {
                ...state,
                taskList: payload
            }
        },
        selectTask: (state, {payload}: PayloadAction<any>) => {
            const {id}: {id: string} = payload;
            return {
                ...state,
                taskList: state.taskList.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            select: true
                        }
                    }
                    return {
                        ...item,
                        select: false
                    }
                })
            }
        },
        setCompletedStatus: (state, {payload}: PayloadAction<any>) => {
            const {id, value}: {id: string, value: boolean} = payload;
            return {
                ...state,
                taskList: state.taskList.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            completed: value,
                        }
                    }
                    return {
                        ...item
                    }
                })
            }
        },
        setFavouriteStatus: (state, {payload}: PayloadAction<any>) => {
            const {id, value}: {id: string, value: boolean} = payload;
            return {
                ...state,
                taskList: state.taskList.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            favourite: value,
                        }
                    }
                    return {
                        ...item
                    }
                })
            }
        },
        setCompleteTodayStatus: (state, {payload}: PayloadAction<any>) => {
            const {id, value}: {id: string, value: boolean} = payload;
            return {
                ...state,
                taskList: state.taskList.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            completeToday: value,
                        }
                    }
                    return {
                        ...item
                    }
                })
            }
        }
    }
})

export const {
    createTask,
    setDragTaskListActions,
    selectTask,
    setCompletedStatus,
    setFavouriteStatus,
    setCompleteTodayStatus
} = tasksSlice.actions;

export default tasksSlice.reducer;