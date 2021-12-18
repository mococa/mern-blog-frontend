import { shade } from "polished";
import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
    }
    body{
        color: ${({ theme }) => theme.colors.text};
        background: ${({ theme }) => theme.colors.background}
    }
    a{
        color: ${({ theme }) => theme.colors.link};
        &:hover{
            color: ${({ theme }) => shade(0.5, theme.colors.text)};
        }
    }
    input, textarea{
        padding: 8px 16px;
        border-radius: 4px;
        border: none;
        outline: none;
        resize: none;
        background-color: ${({ theme }) => theme.colors.absolute};
        color: ${({ theme }) => theme.colors.text};
    }
    hr{
        margin: 16px 0;
    }
`;
