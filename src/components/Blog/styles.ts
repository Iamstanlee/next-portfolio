import styled from "styled-components";
import { ITheme } from "../../utils/interfaces";

export const Container = styled.div`
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
  font-size: 42px;
  font-weight: 100;
  @media only screen and (max-width: 570px) {
    font-size: 34px;
  }
`;

export const Tag = styled.div`
  background: ${(props) => (props.theme as ITheme).titleColor};
  color: ${(props) => (props.theme as ITheme).tooltipColor};
  width: max-content;
  border-radius: 5px;
  padding: 3px 8px;
  margin: 0 8px 15px 0;
  font-size: 13px;
`;

export const BlogWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 1px;
  font-weight: 200;
  padding: 40px 0;
  border-bottom: ${(props) => (props.theme as ITheme).borderColor};
  :last-child {
    border-bottom: none;
  }
`;

export const Span = styled.span`
  color: ${(props) => (props.theme as ITheme).textColor};
  font-weight: 200;
  line-height: 24px;
  font-family: "Inter";
  font-size: 15px;
`;
export const Time = styled.p`
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  width: 100%;
  font-size: 12px;
`;
export const BlogTitle = styled.h2`
  color: ${(props) => (props.theme as ITheme).headerTextColor};
  font-weight: 200;
  width: 100%;
  hover: {
    color: ${(props) => (props.theme as ITheme).buttonPrimaryColor};
  }
  @media only screen and (max-width: 570px) {
    font-size: 34px;
  }
`;

export const BlogText = styled.span`
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  margin: 0 0 25px;
  font-family: "Inter";
  font-size: 15px;
  width: 100%;
`;
export const ContinueBtn = styled.a`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
  display: block;
  width: 100%;
  font-size: 13px;
  letter-spacing: 1.2px;
`;
