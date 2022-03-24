import styles from './content.module.scss';
import styled from "styled-components";
import likeIcon from './img/like.svg';
import tickIcon from './img/tick.svg';
import generalIcon from './img/general.svg';
import {Description} from "../description/Description";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import {selectCurrentCategories} from "../../store/selectors/categoriesSelector";
import { createTask } from '../../store/reducers/tasksReducer';
import {v4 as uuidv4} from "uuid";
import { Task } from '../task/Task';
import {Droppable} from "react-beautiful-dnd";


const Item = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      border: 1px solid #FFFFFF;
      filter: drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.25));
      border-radius: 8px;
      cursor: pointer;
      user-select: none;
      background-color: #f5f5f5;
    `
const Title = styled.div`
      display: flex;
      align-items: center;
      height: 30px;
      padding: 0 0 0 12px;
      border-left: 8px solid ${props => props.color};
      font-size: 18px;
    `

export const Content = ():JSX.Element => {

    const tasksData = useSelector((state: RootState) => state.tasks.taskList);
    const selectCategory = useSelector(selectCurrentCategories);
    const dispatch = useDispatch<AppDispatch>();

    console.log(tasksData);

    const newTask = {
        primaryId: selectCategory ? selectCategory.id : 'null',
        id: uuidv4(),
        title: 'New task',
        desc: 'Short description',
        completed: false,
        favourite: false,
        completeToday: false,
        icon: '',
        time: new Date().toString(),
        select: true,
    }

    return (
        <div className={styles.content}>
            <div className={styles.content__title}>
                <Title color={selectCategory && selectCategory.color}>{selectCategory && selectCategory.title}</Title>
                <div className={styles.filter}>
                    <Item>
                        <img src={tickIcon} alt=""/>
                    </Item>
                    <Item>
                        <img src={likeIcon} alt=""/>
                    </Item>
                    <Item>
                        <img src={generalIcon} alt=""/>
                    </Item>
                </div>
            </div>
            <div className={styles.tasks}>
                <div className={styles.tasks__title}>Task menu</div>
                <div className={styles.tasks__content}>
                        <Droppable droppableId='Task' type='Tasks'>
                            {provided => (
                                <div className={styles.tasks__content__block} {...provided.droppableProps} ref={provided.innerRef}>
                                    {tasksData && tasksData.map((item, index) => {
                                        if (selectCategory && item.primaryId === selectCategory.id) {
                                            return <Task key={item.id} {...item} index={index} />
                                        }})}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    <Description />
                </div>
            </div>
            <div onClick={() => dispatch(createTask(newTask))}>Button</div>
        </div>
    )
}