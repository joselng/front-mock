import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'DM Sans', Open-Sans, Helvetica, Sans-Serif;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  #root {
    height: 100vh;
  }

  html {
    height: 100vh;
  }

  button {
    background: none;
    border: none;

    :hover {
      cursor: pointer;
    }
  }
`

export default GlobalStyle
