import { createGlobalStyle } from 'styled-components'

export const GlobalReset = createGlobalStyle`
  // RESET

  // Box sizing rules
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  // Remove default margin
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  // Set core root defaults
  html {
    scroll-behavior: smooth;
  }

  // Set core body defaults
  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
  }

  // Set default font
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  // Remove underline decoration
  a {
    text-decoration: none;
    color: inherit;
  }

  // Remove list styles on ul, ol elements without a list role
  ul:not([role='list']),
  ol:not([role='list']) {
    padding: 0;
    list-style: none;
  }

  // Make images easier to work with
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  // Inherit fonts for inputs and buttons and set default values
  input,
  button,
  textarea,
  select {
    border: none;
    outline: none;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    line-height: 1.15;
  }

  // Remove default show icon for input type password 
  input[type="password"]::-ms-reveal,
  input[type="password"]::-ms-clear {
    display: none;
  }

  // Button with cursor pointer
  button {
    cursor: pointer;
  }

  // Default textarea 
  textarea {
    resize: none;
    overflow: auto;
  }
`
