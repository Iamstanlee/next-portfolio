import { MouseEventHandler } from "react";
import styled from "styled-components";

const SButton = styled.button<IButton>`
  display: inline-block;
  border-radius: 0.5rem;
  padding: 0 1.5rem;
  border: none;
  min-height: 50px;
  min-width: ${(props) => props.width};
  background-color: ${(props) =>
    props.isPrimary ? props.theme.buttonPrimaryColor : props.theme.buttonColor};
  color: ${(props) => (props.isPrimary ? "#fff" : props.theme.textColor)};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.buttonHoverTextColor};
    background-color: ${(props) => props.theme.buttonHoverColor};
  }
`;

interface IButton {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  isPrimary?: boolean;
  width?: string;
}

const Button: React.FC<IButton> = ({ children, onClick, isPrimary, width }) => {
  return (
    <SButton onClick={onClick} isPrimary={isPrimary} width={width}>
      {children}
    </SButton>
  );
};

export default Button;
