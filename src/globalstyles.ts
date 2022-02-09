import { createGlobalStyle } from "styled-components";
import { ITheme } from "./utils/interfaces";

const AppStyles = createGlobalStyle`
   @font-face {
      font-family: 'MabryPro';
      src: url("/assets/fonts/MabryPro.woff") format("woff");
   }
   *:focus {
      outline: none;
   }
   body,html {
      margin: 0;
      padding: 0;
      font-family: 'MabryPro';
      background-color: ${(props) => (props.theme as ITheme).bgColor};
   }
   body{
      overflow-x: hidden;
   }
   a {
      text-decoration: none;
      color: #36e2b2;

   }
   p {
      font-size: 18px;
      font-weight: 100;
      @media only screen and (max-width: 570px) {
    font-size: 16px;
  }
   }
   h3 {
      font-weight: 100;

   }
    .tooltip-container {
      position: relative;
   }

   .tooltip-box {
      position: absolute;
      background:  ${(props) => (props.theme as ITheme).titleColor};
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
