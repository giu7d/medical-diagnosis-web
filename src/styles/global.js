import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.lightBackground};
    color: ${({ theme }) => theme.colors.text};
    font: 400 14px 'Open Sans', 'Helvetica', sans-serif;
  }
`
