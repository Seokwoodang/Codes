import React from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const CommentForm = ({item}) => {
  const house = <FontAwesomeIcon icon={faHouse} /> 
  const navigate = useNavigate();
  console.log(item);
  return (
    <div>
    <Box /*onClick={navigate("/detail")}*/>
      <Img src={item.image_url}/>
      <p>{item.title}</p>
      <p>{item.comment}</p>
      
    </Box>
    </div>
  )
}

const Img = styled.img `
  width:150px;
  height:200px;

`;

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
export default CommentForm;