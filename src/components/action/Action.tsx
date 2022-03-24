import styles from './action.module.scss';
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";
import {createCategory, setEditMode} from "../../store/reducers/categoriesReducer";
import {Field , Form, Formik} from 'formik';
import { v4 as uuidv4 } from 'uuid';
import {Button} from "../button/Button";


interface FormValues {
    title: string,
    color: string
}

export const Action = ():JSX.Element => {

    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className={styles.actions}>
            <div className={styles.actions__title}>Create category</div>
            <Formik
            initialValues={{
                title: '',
                color: '#ffffff'
            }}
            onSubmit={(
                values: FormValues,
                {resetForm}
            ) => {
                dispatch(createCategory({
                    id: uuidv4(),
                    title: values.title,
                    color: values.color,
                }));
                resetForm({values: {title: '', color: '#ffffff'}})
            }}
            >
            <Form>
                <label htmlFor="title">title</label>
                <Field id='title' name='title' className={styles.actions__form} />
                <label htmlFor="colorValue">color</label>
                <Field type="color" id='color' name='color' className={styles.actions__palette} />
                <div className={styles.actions__buttons}>
                    <Button title='Accept' type='submit' filled={true} />

                    <div className={styles.actions__buttons__item}
                         style={{background: '#FF6060'}}
                         onClick={() => dispatch(setEditMode({value: false}))}
                    >Cancel</div>
                </div>
            </Form>
            </Formik>
        </div>
    )
}


// {categoryEditStatus ? <div>
//     <Subtitle>Title</Subtitle>
//     {/*<Form type='text' />*/}
//     <Subtitle>Color</Subtitle>
//     <div className={styles.actions__color}>
//         {/*<Form type='text' readOnly value={color} />*/}
//         <input type="color" onChange={(e) => setColor(e.target.value)} className={styles.actions__color__palette}/>
//     </div>
//     <div className={styles.actions__buttons}>
//         <div className={styles.actions__buttons__item} style={{background: '#4486FF'}}>Accept</div>
//         <div className={styles.actions__buttons__item}
//              style={{background: '#FF6060'}}
//              onClick={() => dispatch(setEditMode({value: false}))}
//         >Cancel</div>
//     </div>
// </div> : null}