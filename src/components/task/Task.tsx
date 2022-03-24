import styles from './task.module.scss';
import tickIcon from './img/tick.svg';
import likeIcon from './img/like.svg';
import urgentlyIcon from './img/urgently.svg';
import dragIcon from './img/drag.svg';
import {TasksItemProps} from "../../types/tasksTypes";
import {Draggable} from "react-beautiful-dnd";
import { TaskStatus } from '../task-status/TaskStatus';
import { selectTask } from '../../store/reducers/tasksReducer';
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";

export const Task = ({primaryId, id, title, desc, completed, favourite, completeToday, icon, time, select, index}: TasksItemProps):JSX.Element => {

    const dispatch = useDispatch<AppDispatch>();

    return (
        //@ts-ignore
        <Draggable draggableId={id} index={index}>
            {provided => (
                <div className={styles.task} {...provided.draggableProps} ref={provided.innerRef} onClick={() => dispatch(selectTask({id}))}>
                    <div className={styles.task__icon}>
                        {icon ? <img src={icon} alt=""/> : title[0].toUpperCase()}
                    </div>
                    <div className={styles.task__info}>
                        <div className={styles.title}>
                            <div>{title}</div>
                            {completed && <TaskStatus icon={tickIcon} />}
                            {favourite && <TaskStatus icon={likeIcon} />}
                            {completeToday && <TaskStatus icon={urgentlyIcon} />}
                        </div>
                        <div className={styles.task__info__desc}>
                            {desc}
                        </div>
                    </div>
                    <div className={styles.task__time}>12:53</div>
                    <div className={styles.task__drag} {...provided.dragHandleProps}>
                        <img src={dragIcon} alt=""/>
                    </div>
                </div>
            )}
        </Draggable>

    )
}