import styled from "styled-components";

export const StLogin = styled.div `
    display: flex;
  justify-content: center;
  align-items: center;
  width:130px;
  height:40px;
  background-color: #9A86A4;
  margin-left: 10px;
  border-radius: 10px;
    &:hover{
        background-color: grey;
        color:#a12719;
        text-shadow:  0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #a12719, 0 0 30px #732a16, 0 0 40px #af3720, 0 0 55px #af3720, 0 0 75px #af3720, 2px 2px 2px rgba(206,197,0,0);
   }
`;

export const Header = styled.div `
    height: 100px;
    align-items: center;
    background-color: #000000;
    position: relative;
`;

export const Buttons = styled.div `
  display: flex;
  justify-content: end;
  align-items: center;
  position:absolute;
  right : 1rem;
  top:1rem;
`;

export const Title=styled.h1 `
  text-align: center;
  color:#fff53e;
  text-shadow:  0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #a12719, 0 0 30px #732a16, 0 0 40px #af3720, 0 0 55px #af3720, 0 0 75px #af3720, 2px 2px 2px rgba(206,197,0,0);
  font-family: title1;
  font-size: 3.2rem;
`;

export const Post=styled.div`
background-color: #3a3635;
border-radius: 50px;
width:50px;
height:50px;
margin: 0 40px 40px 0;
display: flex;
justify-content: center;
align-items: center;
font-size: 50px;
position: fixed;
right :1%;
bottom: 1%;
`;
