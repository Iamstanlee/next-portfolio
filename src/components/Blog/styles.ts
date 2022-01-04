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

export const Tag = styled.div`
  background: ${(props) => (props.theme as ITheme).titleColor};
  color: ${(props) => (props.theme as ITheme).tooltipColor};
  width: max-content;
  border-radius: 5px;
  padding: 3px 8px;
  margin: 0 8px 15px 0;
  font-size: 13px;
`;
export const BlogContainer = styled.div`

`
export const BlogWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  text-transform: capitalize;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 1px;
  font-weight: 200;
  padding: 40px 0;
  border-bottom: ${(props) => (props.theme as ITheme).borderColor};
  :last-child{
     border-bottom: none;
  }
`;

// Texts
export const HeaderText = styled.h1`
  color: ${(props) => (props.theme as ITheme).headerTextColor};
  font-size: 42px;
  font-weight: 100;
  line-height: 52px;
`;

export const ColoredText = styled.a`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
`;
export const Time = styled.span`
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  width: 100%;
  font-size: 14px;
`;
export const BlogTitle = styled.p`
  color: ${(props) => (props.theme as ITheme).headerTextColor};
  font-size: 36px;
  font-weight: 100;
  line-height: 48px;
`;
export const BlogText = styled.p`
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  margin: 0 0 25px;
  font-size: 16px;
  width: 100%;
`;
export const ContinueBtn = styled.a`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
  display: block;
  font-weight: 500;
  width: 100%;
  font-size: 15px;
  letter-spacing: 2px;
`;
