import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-margin-top: 25vh;
    }
    
    html {
        overflow: hidden;
    }
    
    body {
        ${'' /* background: #343a40; */}
        height: 100vh;
        width: 100%;
        overflow-x: hidden;
    }
`


export default GlobalStyles;