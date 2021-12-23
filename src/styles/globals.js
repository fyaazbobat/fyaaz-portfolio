import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  
  .tech-icons {
    position: relative !important;
    padding-top: 150px !important;
    font-size: 4.5em !important;
    margin: 15px !important;
    padding: 10px !important;
    opacity: 0.93 !important;
    border: 1.7px solid rgba(19, 73, 173, 0.637) !important;
    vertical-align: middle !important;
    text-align: center !important;
    border-radius: 5px !important;
    display: table !important;
    box-shadow: 4px 5px 4px 3px rgba(38, 2, 138, 0.137) !important;
    overflow: hidden !important;
    transition: all 0.4s ease 0s !important;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;