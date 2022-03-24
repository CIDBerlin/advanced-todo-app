import styles from './description.module.scss';
import editIcon from './img/edit.svg';
import {Tag} from "../tag/Tag";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentTask} from "../../store/selectors/tasksSelector";
import {DescriptionEmptyIcon} from "../description-empty-icon/DescriptionEmptyIcon";
import {TaskStatusCheckbox} from "../task-status-checkbox/TaskStatusCheckbox";
import {setCompletedStatus, setCompleteTodayStatus, setFavouriteStatus} from "../../store/reducers/tasksReducer";
import {AppDispatch} from "../../store/store";
import {useEffect} from "react";

export const Description = ():JSX.Element => {

    const selectTask = useSelector(selectCurrentTask);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {}, [selectTask])

    if (selectTask) {
        const {id, title, desc, completed, favourite, completeToday, icon, time} = selectTask;

        return (
            <div className={styles.description}>
                <div className={styles.description__title}>
                    <div>TITLE</div>
                    <div className={styles.description__title__edit}>
                        <img src={editIcon} alt=""/>
                    </div>
                </div>
                <div className={styles.description__content}>{title}</div>
                <div className={styles.description__title}>
                    <div>ICON</div>
                    <div className={styles.description__title__edit}>
                        <img src={editIcon} alt=""/>
                    </div>
                </div>
                {icon ? <div className={styles.description__icon}></div> : <DescriptionEmptyIcon />}
                <div className={styles.description__title}>
                    <div>DESCRIPTION</div>
                    <div className={styles.description__title__edit}>
                        <img src={editIcon} alt=""/>
                    </div>
                </div>
                <div className={styles.description__desc}>
                    {desc}
                </div>
                <div className={styles.description__title}>
                    <div>STATUS</div>
                    <div className={styles.description__title__edit}>
                        <img src={editIcon} alt=""/>
                    </div>
                </div>
                <div className={styles.description__status}>
                    <TaskStatusCheckbox desc='Completed' status={completed} action={() => dispatch(setCompletedStatus({id, value: !completed}))} />
                    <TaskStatusCheckbox desc='Favourite' status={favourite} action={() => dispatch(setFavouriteStatus({id, value: !favourite}))} />
                    <TaskStatusCheckbox desc='Must complete today' status={completeToday} action={() => dispatch(setCompleteTodayStatus({id, value: !completeToday}))} />
                </div>
                <div className={styles.description__title}>
                    <div>TAGS</div>
                    <div className={styles.description__title__edit}>
                        <img src={editIcon} alt=""/>
                    </div>
                </div>
                <div className={styles.description__tags}>
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                </div>
            </div>
        )
    } else {
        return <div></div>;
    }
}