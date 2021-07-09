import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    &:focus { outline: none; } 
    scroll-behavior: smooth; 
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`;

export const MaterialOverides = createGlobalStyle`
  .Mui-selected {
      background-color: "transparent";
      border-color: "#24e5d8";
      color: "#24e5d8";
    }
  .MuiPaginationItem-outlined {
      border: 1px solid #62686c;
      color: "#62686c";
    }
`;

const VendorStyles = () => (
  <>
    <GlobalStyle />
    <MaterialOverides />
  </>
);

export default VendorStyles;
