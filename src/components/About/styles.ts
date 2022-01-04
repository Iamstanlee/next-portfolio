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
  min-height: 80vh;

  @media only screen and (min-width: 570px) {
    padding: 2rem 2.54rem;
  }

  @media only screen and (min-width: 765px) {
    padding: 2rem 3.54rem;
  }
  @media only screen and (min-width: 1024px) {
    padding: 2rem 5.54rem;
  }
  @media only screen and (min-width: 1200px) {
    padding: 2rem 7.54rem;
  }
`;

export const HeaderText = styled.h1`
  color: ${(props) => (props.theme as ITheme).headerTextColor};
  font-size: 42px;
  font-weight: 100;
`;

export const ParaText = styled.p`
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  font-weight: 200;
  padding: 0;
  text-align: center;
  line-height: 26px;
  letter-spacing: 1px;
  @media only screen and (min-width: 765px) {
    padding: 0 12%;
  }
`;

export const ColoredText = styled.span`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
`;

export const ColoredLinkText = styled.a`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
`;

export const Image = styled.img`
  position: absolute;
`;

export const HandSignImage = styled(Image)`
  max-width: 18.625em;
  bottom: 10px;
  left: 0;
  display: none;
  @media only screen and (min-width: 765px) {
    display: block;
  }
`;

export const BoltImage = styled(Image)`
  width: 10.625em;
  position: relative;
`;
