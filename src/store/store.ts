import {configureStore, Middleware} from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileReducer";
import {ProfileTypes} from "../types/profileTypes";
import categoriesReducer from "./reducers/categoriesReducer";
import {CategoriesTypes} from "../types/categoriesTypes";
import tasksReducer from "./reducers/tasksReducer";
import {TasksTypes} from "../types/tasksTypes";

const savePersistedDataMiddleware: Middleware = store => next => action => {
    const result = next(action)
    localStorage.setItem('state', JSON.stringify(store.getState()))
    return result
}

const getPersistedState = (): RootState | undefined => {
    try {
        const persistedState = localStorage.getItem('state')
        if (persistedState)
            return JSON.parse(persistedState)
    } catch (e) {
        console.log(e)
    }
    return undefined
}

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        categories: categoriesReducer,
        tasks: tasksReducer
    },
    preloadedState: getPersistedState(),
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), savePersistedDataMiddleware]
})

export type AppDispatch = typeof store.dispatch;
export type RootState = { profile: ProfileTypes; categories: CategoriesTypes, tasks: TasksTypes };