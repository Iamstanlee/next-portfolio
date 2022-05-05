import { createGlobalStyle } from "styled-components";
import { ITheme } from "./utils/interfaces";

const AppStyles = createGlobalStyle`
   @font-face {
      font-family: "WNBA";
      src: url("/assets/fonts/WNBA-Regular.ttf");
   }
   
   *:focus {
      outline: none;
   }

   body,html {
      margin: 0;
      padding: 0;
      background-color: ${(props) => (props.theme as ITheme).bgColor};
      overflow-x: hidden;
   }

   h1,h2,h3,h4,h5,h6 {
      font-family: "WNBA";
   }

   a {
      text-decoration: none;
      color: #36e2b2;
      font-family: "WNBA";
   }

   p {
      font-size: 17px;
      font-family: "WNBA";
      font-weight: 200;
      @media only screen and (max-width: 570px) {
      font-size: 15px;
         }   
   }`;

export default AppStyles;
