import styles from './category-item.module.scss';
import styled from "styled-components";
import editIcon from './img/edit.svg';
import removeIcon from './img/remove.svg';
import dragIcon from './img/drag.svg';
import { CategoryItemProps } from '../../types/categoriesTypes';
import {Draggable} from "react-beautiful-dnd";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";
import {deleteCategory, selectCategory} from "../../store/reducers/categoriesReducer";

const Item = styled.div`
      flex: 0 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 360px;
      height: 30px;
      padding: 0 10px;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
      border-left: 8px solid ${props => props.color};
      margin: 0 0 10px 0;
      background-color: #ffffff;
      &:hover {
        background-color: #F4F4F4;
      }
    `

export const CategoryItem = ({id, title, color, select, index}: CategoryItemProps):JSX.Element => {

    const dispatch = useDispatch<AppDispatch>();

    return (
        // @ts-ignore
        <Draggable draggableId={id} index={index}>
            {provided => (
                <Item className={styles.category} {...provided.draggableProps} ref={provided.innerRef} color={color}
                      onClick={() => dispatch(selectCategory({id}))}>
                    <div className={styles.category__title}>{title}</div>
                    <div className={styles.category__settings}>
                        <div className={styles.category__settings__item}>
                            <img src={editIcon} alt=""/>
                        </div>
                        <div className={styles.category__settings__item} onClick={() => dispatch(deleteCategory({id}))}>
                            <img src={removeIcon} alt=""/>
                        </div>
                        <div className={styles.category__settings__item} {...provided.dragHandleProps}>
                            <img src={dragIcon} alt=""/>
                        </div>
                    </div>
                </Item>
            )}
        </Draggable>
    )
}