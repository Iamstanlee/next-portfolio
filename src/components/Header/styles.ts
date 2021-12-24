import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  // position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 99;
  padding-top: 24px;
  display: none;

  @media only screen and (min-width: 765px) {
    display: flex;
  }
`;

export const Logo = styled.span`
  font-size: 18px;
  text-align: center;
  color: white;
  font-weight: 200;
`;

export const LinkGroup = styled.ul`
  list-style: none;
  display: flex;
`;

const Link = styled.a`
  text-decoration: none;
  text-transform: capitalize;
  padding: 10px 30px;
  margin: 0 20px;
  transition: 0.5s;
`;

export interface IListItem {
  active?: boolean;
}

export const ListItem = styled(Link)<IListItem>`
  font-size: 16px;
  text-align: center;
  color: ${(props) =>
    props.active ? props.theme.buttonHoverTextColor : props.theme.textColor};
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
