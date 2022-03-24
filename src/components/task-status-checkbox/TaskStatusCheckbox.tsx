import styles from './task-status-checkbox.module.scss';

interface TaskStatusCheckboxProps {
    desc: string,
    status: boolean,
    action: () => void
}

export const TaskStatusCheckbox = ({desc, status, action}: TaskStatusCheckboxProps):JSX.Element => {

    return (
        <div className={styles.status}>
            <input type="checkbox" className={styles.status__box} checked={status} onChange={() => action()}/>
            <div>{desc}?</div>
        </div>
    )
}