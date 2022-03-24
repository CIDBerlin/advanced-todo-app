import React, {useEffect} from 'react';
import styles from './App.module.scss';
import {Info} from "./components/info/Info";
import {Content} from "./components/content/Content";
import {DragDropContext} from "react-beautiful-dnd";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./store/store";
import {setDragActions} from "./store/reducers/categoriesReducer";
import { setDragTaskListActions } from './store/reducers/tasksReducer';

export const App = ():JSX.Element => {

    const categoriesData = useSelector((state: RootState) => state.categories.categories);
    const tasksData = useSelector((state: RootState) => state.tasks.taskList);
    const dispatch = useDispatch<AppDispatch>();

    const onDragHandle = (result: any) => {
        if (result.type === 'Categories') {
            const items = Array.from(categoriesData);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            dispatch(setDragActions(items))
        }
        if (result.type === 'Tasks') {
            const items = Array.from(tasksData);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            dispatch(setDragTaskListActions(items));
        }
    }

    useEffect(() => {}, [categoriesData]);

  return (
    <div className={styles.wrapper}>
        <DragDropContext onDragEnd={onDragHandle}>
            <Info />
            <Content />
        </DragDropContext>
    </div>
  )
}