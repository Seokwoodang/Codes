import React from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const MovieForm = ({item}) => {
  

  const house = <FontAwesomeIcon icon={faHouse} /> 
  const navigate = useNavigate();
  return (
    <div>
          <Header>
      <Home onClick={()=>{navigate('/')}}>{house}</Home>
      <Buttons>
        <Button onClick={()=>{navigate('/join')}}>Join</Button>
        <Button onClick={()=>{navigate('/login')}}>Login</Button>
      </Buttons>
    </Header>

    <Box onClick={navigate("/detail")}>
      <h2>{item.ProImg}</h2>
      <p>{item.email}</p>
      <p>{item.date}</p>
      <p>{item.content}</p>
      <p>{item.img}</p>
      <p>좋아요{item.like}개</p>
      <p>댓글 {item.comment}개</p>
    </Box>
    </div>
  )
}


const Box = styled.div `
  font-family: body;
  padding: 10px;
  margin-left: 20px;
  margin-top:20px;
  background-color: #CDC2AE;
  width: 200px;
  height:300px;
  border-radius: 10px;  
`;

const Home = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Header=styled.div`
  height: 100px;
  align-items: center;
  background-color: #B1BCE6;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Button=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:200px;
  height:40px;
  background-color: #9A86A4;
  margin-left: 10px;
  border-radius: 10px;

`;
export default MovieForm;