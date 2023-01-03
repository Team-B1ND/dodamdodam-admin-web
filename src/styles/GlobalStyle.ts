import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font.css";

export const GlobalStyle = createGlobalStyle`

    ${reset}

    * {
        box-sizing: border-box;
    }
`;
