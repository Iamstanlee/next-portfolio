import { createGlobalStyle } from "styled-components";
import { ITheme } from "./utils/interfaces";

const AppStyles = createGlobalStyle`
    @font-face {
        font-family: 'Almarena-Regular';
        src: url("/assets/fonts/Almarena-Display-Regular.woff") format("woff");
    }
    @font-face {
        font-family: 'Almarena-Regular';
        src: url("/assets/fonts/Almarena-Light_utwkum.woff") format("woff");
        font-weight: 200;
    }
    *:focus {
        outline: none;
    }
    body,
    html {
           margin: 0;
    padding: 0;
        font-family: 'Almarena-Regular';
        background-color: ${(props) => (props.theme as ITheme).bgColor};
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    p {
          font-size: 18px;
    }
`;

export default AppStyles;
