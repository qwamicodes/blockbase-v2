import { createGlobalStyle } from "styled-components";
import { lightGrey } from "../helpers/Variables";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
  font-family: "Clash Grotesk", sans-serif;
    color: #333;
}


a {
    text-decoration: none;
}

input, button {
    &:focus {
        outline: 0;
    }
}

button {
    background: transparent;
    border: 0;
}

svg {
    color: ${lightGrey}
}

`;

export default GlobalStyles;
