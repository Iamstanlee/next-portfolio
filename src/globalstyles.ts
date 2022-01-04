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

    .tooltip-container {
  position: relative;
}

.tooltip-box {
  position: absolute;
  background:  ${(props) => (props.theme as ITheme).projectTitleColor};
  color: ${(props) => (props.theme as ITheme).tooltipColor};
  padding: 5px;
  border-radius: 5px;
  top: calc(100% + 5px);
  display: none;
  width: max-content;
font-size: 14px;
letter-spacing: 1px;
line-height: 24px;
}

.tooltip-box.visible {
  display: block;
}

`;

export default AppStyles;
