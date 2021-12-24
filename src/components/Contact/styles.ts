import styled from "styled-components";
import { ITheme } from "../../utils/interfaces";

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 20vh;

  @media only screen and (min-width: 765px) {
    padding: 0 8.54rem;
  }
`;

export const HeaderText = styled.h1`
  color: ${(props) => (props.theme as ITheme).headerTextColor};
`;

export const SpanText = styled.span`
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  font-weight: 200;
  padding: 0;
  text-align: center;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: 1px;
  @media only screen and (min-width: 765px) {
    padding: 0 20%;
  }
`;

export const ColoredText = styled.span`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
`;

export const ButtonWrapper = styled.div`
  margin: 10px 0;
`;

export const SpaceY = styled.div<{ space: string }>`
  margin-top: ${(props) => props.space || "12px"};
`;
