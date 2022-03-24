import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import {CategoriesTypes} from "../../types/categoriesTypes";

const initialState: CategoriesTypes = {
    categories: [
        {id: uuidv4(), title: 'Work now', color: '#36B6EB', select: true },
        {id: uuidv4(), title: 'Homework', color: '#EB3661', select: false },
        {id: uuidv4(), title: 'Must have', color: '#C7EB36', select: false },
        {id: uuidv4(), title: 'Need completed today', color: '#D136EB', select: false },
    ],
    editMode: false,
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        createCategory: (state, {payload}: PayloadAction<any>) => {
            return {
                ...state,
                categories: [...state.categories, payload],
            }
        },
        selectCategory: (state, {payload}: PayloadAction<any>) => {
            const {id}: {id: string} = payload;
            return {
                ...state,
                categories: state.categories.map(item => {
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
        setEditMode: (state, {payload}: PayloadAction<any>) => {
            const {value}: {value: boolean} = payload;
            return {
                ...state,
                editMode: value
            }
        },
        setDragActions: (state, {payload}: PayloadAction<any>) => {
            return {
                ...state,
                categories: payload
            }
        },
        deleteCategory: (state, {payload}: PayloadAction<any>) => {
            const {id}: {id: string} = payload;
            return {
                ...state,
                categories: state.categories.filter(item => item.id !== id)
            }
        }
    }
})

export const {
    setEditMode,
    setDragActions,
    deleteCategory,
    createCategory,
    selectCategory
} = categoriesSlice.actions;

export default categoriesSlice.reducer;