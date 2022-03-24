import styles from './profile-stats.module.scss';

interface ProfileStatsProps {
    title: string,
    value: number
}

export const ProfileStats = ({title, value}: ProfileStatsProps):JSX.Element => {
    return (
        <div className={styles.stats}>
            <div><span>{value}</span></div>
            <div>{title}</div>
        </div>
    )
}