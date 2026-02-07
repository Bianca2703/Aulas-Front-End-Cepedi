import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;

export default GlobalStyle;
