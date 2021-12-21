import styled, { keyframes } from "styled-components";
import { ITheme } from "../../utils/interfaces";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const HeaderText = styled.h1`
  font-size: 98px;
  text-align: center;
  font-weight: 100;
  color: ${(props) => (props.theme as ITheme).headerTextColor};
  z-index: 9;
`;

export const ColoredText = styled.span`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
`;

export const SmallText = styled.span`
  font-size: 16px;
  text-align: center;
  color: ${(props) => (props.theme as ITheme).textColor};
`;

export const SummaryText = styled(SmallText)`
  font-weight: 200;
  padding: 0 100px;
`;

export const Image = styled.img`
  position: absolute;
`;

export const SpiralImage = styled(Image)`
  max-width: 8.625em;
  bottom: 20%;
  left: 0;
`;

export const SpiralImage1 = styled(Image)`
  max-width: 8.625em;
  bottom: 0;
  right: 0;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StarfishImage = styled(Image)`
  width: 20.625em;

  bottom: 20%;
  right: 20%;
  animation: ${rotate} 12s linear infinite;
`;
