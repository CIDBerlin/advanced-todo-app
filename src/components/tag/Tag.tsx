import styles from './tag.module.scss';
import styled from "styled-components";

const TagStyle = styled.div`
      // background-color: 
      display: flex;
      align-items: center;
      padding: 4px 8px;
      border-radius: 4px;
      margin: 0 10px 0 0;
      font-size: 12px;
      font-weight: 500;
      color: #fff;
      user-select: none;
      cursor: pointer;
    `

export const Tag = ():JSX.Element => {

    const color = '#fff'

    return (
        <TagStyle className={styles.tag}>Important</TagStyle>
    )
}