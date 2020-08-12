import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Poppins&display=swap');

  :root {
    font-size: 60% !important;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh
  }

  body {
    background: ${theme.background};
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    color: ${theme.textBase}
  }

  .container {
    width: 90vw;
    max-width: 700px;
  }

  @media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}
`
