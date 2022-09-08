import { createGlobalStyle } from "styled-components";

import githuBackground from '../assets/github-background.svg'

export default createGlobalStyle`

:root {
    --white: #fff;
    --gray-100: #e1e1e6;
    --gray-300: #c4c4cc;
    --gray-400: #8d8d99;
    --gray-600: #323238;
    --gray-700: #29292e;
    --gray-800: #202024;
    --gray-900: #121214;
  
    --green-300: #00b37e;
    --green-500: #00875f;

    --red-500: #F75A68;
  }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        background: #f0f0f5 url(${githuBackground}) no-repeat 70% top;
        -webkit-font-smoothing: antialiased;
    }

    /* 1rem = 16px */
body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
#root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px
}

button {
    cursor: pointer
}


`