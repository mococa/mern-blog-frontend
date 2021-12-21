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
        cursor: pointer;
        transition: 50ms;
        &:hover{
            color: ${({ theme }) => shade(0.5, theme.colors.link)};
        }
    }
    input, textarea{
        padding: 10px 16px;
        border-radius: 6px;
        border: none;
        outline: none;
        resize: none;
        background-color: ${({ theme }) => theme.colors.absolute};
        color: ${({ theme }) => theme.colors.text};
    }
    button, input[type=button]{
        border: none;
        outline: none;
        padding: 12px 16px;
        font-size: 14px;
        cursor: pointer;
        transition: 100ms;
        font-weight: 600;
        background-color: ${({ theme }) => theme.colors.link};
        color: ${({ theme }) => (theme.title === "dark" ? "black" : "white")};
        &:hover{
            filter: brightness(90%);
        }
        &:disabled{
            filter: brightness(50%);
            cursor: auto;
        }
    }
    hr{
        margin: 16px 0;
    }
`;
