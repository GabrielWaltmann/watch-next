import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Inter, sans-serif;
    }

    body{
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }
`

