import styled from "styled-components";
import { ITheme } from "../../utils/interfaces";

export const Container = styled.div`
  box-sizing: border-box;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  @media only screen and (min-width: 765px) {
    padding: 0 8.54rem;
  }
`;

export const HeaderText = styled.h1`
  color: ${(props) => (props.theme as ITheme).headerTextColor};
`;

export const ParaText = styled.p`
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  font-weight: 200;
  padding: 0;
  text-align: center;
  line-height: 24px;
  letter-spacing: 1px;
  @media only screen and (min-width: 765px) {
    padding: 0 20%;
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
  top: 100%;
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
