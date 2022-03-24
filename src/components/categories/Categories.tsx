import styles from './categories.module.scss';
import {CategoryItem} from "../category-item/CategoryItem";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import { setEditMode } from '../../store/reducers/categoriesReducer';
import {Droppable} from "react-beautiful-dnd";

export const Categories = ():JSX.Element => {

    const categoriesData = useSelector((state: RootState) => state.categories);
    const {categories, editMode} = categoriesData;
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className={styles.categories}>
            <div className={styles.categories__title}>Categories</div>
            <Droppable droppableId='Category' type='Categories'>
                {provided => (
                    <div className={styles.categories__block} {...provided.droppableProps} ref={provided.innerRef}>
                        {categories.map((item, index) => <CategoryItem key={item.id} {...item} index={index} />)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            <div className={styles.categories__create} onClick={() => dispatch(setEditMode({value: !editMode}))}>
                <div className={styles.categories__create__icon}>+</div>
                <div>Create new category</div>
            </div>
        </div>
    )
}