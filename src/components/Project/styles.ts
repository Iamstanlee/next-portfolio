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

export const Span = styled.span`
  font-family: "WNBA";
  font-size: 15px;
`;

export const Projects = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  ::after {
    content: "";
    display: block;
    margin-left: 65%;
    margin-left: 50%;
  }
`;
export const Project = styled.div`
  margin: 0;
  padding: 1rem 0;
  width: 100%;
  min-width: 150px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;

    @media (min-width: 570px) {
      padding: 3rem 1.6rem
      margin: 20px;
    }
  @media (min-width: 670px) {
    width: 38%;
    margin: 1.5%;
  }
  @media (min-width: 780px) {
    width: 39%;
  }
  @media (min-width: 860px) {
    width: 39%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
  @media (min-width: 1200px) {
    min-width: 41.3%;
    height: 270px;
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const TagRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Spaced = styled.div<{ height: string }>`
  height: ${(props) => props.height};
`;

export const Tag = styled(Span)`
  background: ${(props) => (props.theme as ITheme).titleColor};
  color: ${(props) => (props.theme as ITheme).tooltipColor};
  width: max-content;
  border-radius: 5px;
  padding: 3px 8px;
  margin: 0 8px 15px 0;
  font-size: 13px;
`;

// Texts
export const HeaderText = styled.h1`
  color: ${(props) => (props.theme as ITheme).headerTextColor};
  font-size: 42px;
  font-weight: 100;
  @media only screen and (max-width: 570px) {
    font-size: 34px;
  }
`;

export const ColoredText = styled.span`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
`;

export const TitleText = styled.h3`
  color: ${(props) => (props.theme as ITheme).titleColor};
  text-transform: capitalize;
  letter-spacing: 3px;
  margin: 0 0 20px;
  font-size: 38px;
  font-weight: 100;
  @media only screen and (max-width: 570px) {
    font-size: 31px;
  }
`;

export const DescText = styled(Span)`
  color: ${(props) => (props.theme as ITheme).projectDescColor};
  margin: 0 0 20px;
  font-weight: 200;
  padding: 0;
  line-height: 24px;
  letter-spacing: 1px;
  @media only screen and (max-width: 570px) {
    font-size: 15px;
  }
`;

export const IconText = styled.a`
  color: ${(props) => (props.theme as ITheme).titleColor};
  color: ${(props) => (props.theme as ITheme).projectDescColor};
  padding-right: 15px;

  :hover {
    color: #36e2b2;
  }
`;
