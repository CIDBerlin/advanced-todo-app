import styles from './task-status.module.scss';

interface TaskStatusProps {
    icon: string
}

export const TaskStatus = ({icon}: TaskStatusProps):JSX.Element => {
    return (
        <div className={styles.status}>
            <img src={icon} alt=""/>
        </div>
    )
}