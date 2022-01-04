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
    min-width: 32%;
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

export const Tag = styled.div`
  background: ${(props) => (props.theme as ITheme).projectTitleColor};
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
`;

export const ColoredText = styled.span`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
`;

export const TitleText = styled.h3`
  color: ${(props) => (props.theme as ITheme).projectTitleColor};
  text-transform: capitalize;
  letter-spacing: 3px;
  margin: 0 0 20px;
  font-size: 38px;
  font-weight: 100;
`;

export const DescText = styled.p`
  color: ${(props) => (props.theme as ITheme).projectDescColor};
  margin: 0 0 20px;
  font-weight: 200;
  padding: 0;
  font-size: 17px;
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
