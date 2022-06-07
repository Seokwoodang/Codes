import { createGlobalStyle } from 'styled-components'
import back from "./photo/nazgul.PNG"
import "./App.css"

const GlobalBack=createGlobalStyle`
    body{
        background-image: url(${back});
        background-position: -100% 70%;
        background-size: cover;
        background-attachment: fixed;
        ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    font-family: "title1";
    }
`;

export default GlobalBack