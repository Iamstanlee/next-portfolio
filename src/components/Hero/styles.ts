import styled, { keyframes } from "styled-components";
import { ITheme } from "../../utils/interfaces";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  min-height: 600px;
  padding: 0 15px;
  @media only screen and (min-width: 765px) {
    padding: 0 15px;
  }
`;

export const HeaderText = styled.h1`
  font-size: 50px;
  text-align: center;
  font-weight: 400;
  color: ${(props) => (props.theme as ITheme).headerTextColor};
  z-index: 9;
  @media only screen and (min-width: 450px) {
    font-size: 70px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 98px;
    max-width: 1000px;
  }
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
  max-width: 6.625em;
  bottom: 10%;
  left: 0;
  @media only screen and (min-width: 570px) {
    max-width: 8.625em;
    bottom: 20%;
  }
`;

export const SpiralImage1 = styled(Image)`
  max-width: 6.625em;
  bottom: 0;
  right: 0;
  @media only screen and (min-width: 570px) {
    max-width: 8.625em;
  }
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
  width: 15.625em;

  bottom: 20%;
  right: 20%;
  animation: ${rotate} 12s linear infinite;
  @media only screen and (min-width: 570px) {
    width: 20.625em;
  }
`;
