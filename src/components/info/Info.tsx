import styles from './info.module.scss';
import {Profile} from "../profile/Profile";
import {Categories} from "../categories/Categories";
import {Action} from "../action/Action";

export const Info = ():JSX.Element => {
    return (
        <div className={styles.info}>
            <Profile />
            <Categories />
            <Action />
        </div>
    )
}