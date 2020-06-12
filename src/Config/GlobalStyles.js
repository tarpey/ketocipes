import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
  header a {
    color: ${({ theme }) => theme.headings};
  }
  h1, h2, h3 {
    color: ${({ theme }) => theme.headings}; 
  }
  .grid-item {
    background: ${({ theme }) => theme.grids}; 
  }
  `;
