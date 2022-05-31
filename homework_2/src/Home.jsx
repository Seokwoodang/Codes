import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';
import styled from "styled-components";


const Home = () => {
  return (
    <div MainFrame>
        <div className='title'>
            Hello
        </div>
        <div className='MainBody'>
            this is body part
            <Link to={`/detail`}><Button><strong>+</strong></Button></Link>
        </div>
    </div>
  )
}

const Button = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  position:fixed;
  right: 50px;
  bottom:50px;
  border-radius: 50px;
  width:50px;
  height:50px;
  background-color: tomato;
`;

export default Home;