import styled from "styled-components";

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 42px;
  font-size: 18px;
  background-color: ${props => props.filled ? '#fff' : '#000'};
  color: #fff;
  cursor: pointer;
  user-select: none;
`

interface ButtonProps {
    title: string,
    type?: string,
    filled: boolean,
    action?: () => void;
}

export const Button = ({title, action, filled}: ButtonProps):JSX.Element => {
    return (
        <ButtonStyle onClick={() => action} filled={filled}>{title}</ButtonStyle>
    )
}

// background-color: ${props => props.filled ? '#fff' : '#000'};