import {RootState} from "../store";
import {createSelector} from "reselect";

const selectCategories = (state: RootState) => state.categories.categories;

export const selectCategoriesValue = createSelector([selectCategories], (categories) => {
    return categories.length;
})

export const selectCurrentCategories = createSelector([selectCategories], (categories) => {
    return categories.find(item => item.select);
})