import styles from './description-empty-icon.module.scss';
import uploadIcon from './img/upload.svg';

export const DescriptionEmptyIcon = ():JSX.Element => {
    return (
        <div className={styles.icon}>
            <div className={styles.icon__upload}>
                <img src={uploadIcon} alt=""/>
            </div>
            <div><span>You can upload</span> avatar, if tap on icon title.</div>
        </div>
    )
}