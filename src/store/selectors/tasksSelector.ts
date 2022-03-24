import {RootState} from "../store";
import {createSelector} from "reselect";

const selectTasksList = (state: RootState) => state.tasks.taskList;

export const selectTasksValue = createSelector([selectTasksList], (tasks) => {
    return tasks.length;
})

export const selectFavouritesTask = createSelector([selectTasksList], (tasks) => {
    return tasks.filter(item => item.favourite).length;
})

export const selectCompletedTask = createSelector([selectTasksList], (tasks) => {
    return tasks.filter(item => item.completed).length;
})

export const selectCurrentTask = createSelector([selectTasksList], (tasks) => {
    return tasks.find(item => item.select);
})