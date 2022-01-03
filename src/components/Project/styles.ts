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
  margin: 20px;
  padding: 3rem 1.6rem;
  width: 100%;
  min-width: 150px;
  border: 1px solid #2f2f2f;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 570px) {
    width: 36%;
    margin: 1.5%;
  }
  @media (min-width: 620px) {
    width: 37%;
  }
  @media (min-width: 780px) {
    width: 39%;
  }
  @media (min-width: 860px) {
    width: 23%;
  }
  @media (min-width: 1024px) {
    width: 24%;
  }
  @media (min-width: 1200px) {
    height: 200px;
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Tag = styled.div`
  background: ${(props) => (props.theme as ITheme).projectTitleColor};
  color: ${(props) => (props.theme as ITheme).tooltipColor};
  width: max-content;
  border-radius: 5px;
  padding: 3px 8px;
  margin: 0 0 15px;
  font-size: 13px;
`;

// Texts
export const HeaderText = styled.h1`
  color: ${(props) => (props.theme as ITheme).headerTextColor};
`;

export const ColoredText = styled.span`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
`;

export const TitleText = styled.h3`
  color: ${(props) => (props.theme as ITheme).projectTitleColor};
  font-size: 24px;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin: 0 0 20px;
`;

export const DescText = styled.p`
  color: ${(props) => (props.theme as ITheme).projectDescColor};
  margin: 0 0 20px;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 1px;
`;

export const IconText = styled.a`
  color: ${(props) => (props.theme as ITheme).projectTitleColor};
  color: ${(props) => (props.theme as ITheme).projectDescColor};
  padding-right: 15px;

  :hover {
    color: #36e2b2;
  }
`;
