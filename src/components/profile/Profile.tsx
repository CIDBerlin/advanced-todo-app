import styles from './profile.module.scss';
import maleIcon from './img/empty-male.png';
import femaleIcon from './img/empty-female.png';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {selectCategoriesValue} from "../../store/selectors/categoriesSelector";
import {selectCompletedTask, selectFavouritesTask, selectTasksValue} from "../../store/selectors/tasksSelector";
import {ProfileStats} from "../profile-stats/ProfileStats";


export const Profile = ():JSX.Element => {

    const profileInfo = useSelector((state: RootState) => state.profile);
    const {username, sex, status, job, location, avatar} = profileInfo;
    const emptyAvatar = sex ? femaleIcon : maleIcon;
    const categoriesLength = useSelector(selectCategoriesValue);
    const tasksLength = useSelector(selectTasksValue);
    const favouriteTasks = useSelector(selectFavouritesTask);
    const completedTasks = useSelector(selectCompletedTask);

    return (
        <div className={styles.profile}>
            <div className={styles.profile__title}>Welcome back, {username}</div>
            <div className={styles.profile__status}>
                <div className={styles.profile__status__main}>What’s bothering you?</div>
                <div className={styles.profile__status__add}>😅 + status</div>
            </div>
            <div className={styles.profile__info}>
                <div className={styles.profile__info__icon}>
                    <img src={avatar ? avatar : emptyAvatar} alt=""/>
                    {status && <span>{status}</span>}
                </div>
                <div className={styles.profileContent}>
                    <div className={styles.profileContent__job}>{job}</div>
                    <div className={styles.profileContent__location}>
                        <div className={styles.profileContent__location__flag}></div>
                        <div>{location}</div>
                    </div>
                    <div className={styles.profileContent__title}>General statistic</div>
                    <div className={styles.profileContent__stats}>
                        <ProfileStats title='Categories' value={categoriesLength} />
                        <ProfileStats title='Tasks' value={tasksLength} />
                        <ProfileStats title='Completed' value={completedTasks} />
                        <ProfileStats title='Favourites' value={favouriteTasks} />
                    </div>
                </div>
            </div>
            <div className={styles.profile__quote}>
                This landing page was created by CIDBerlin. Design was create too.
            </div>
        </div>
    )
}