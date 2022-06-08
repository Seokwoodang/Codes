import React from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate,Link } from 'react-router-dom';
import { height } from '@mui/system';
import { getCookie } from '../cookie';

const CommentForm = ({item}) => {
  const house = <FontAwesomeIcon icon={faHouse} /> 
  const navigate = useNavigate();
  
  //console.log(item);
  return (
    <div>
     
     <Box >
     <Link to={`/detail/${item.id}`}>
      <Di>
      <Img src={item.image_url}/>
      </Di>
      </Link>
      <Pro>
        <User_pic src={item.user_pic}/> 
        <Nick>{item.nickname}</Nick>
      </Pro>
      <P>{item.comment}</P>
    </Box>
    
    </div>
  )
}

const Nick = styled.div`
  margin-left:1rem;
  color : white;
`;

const P = styled.p`
  color:white;
  margin-left: 15px;
`;


const Pro = styled.div`
  width:100%;
  height:3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px;
`;

const Di = styled.div`
  height:70%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const User_pic = styled.img`
  width:3rem;
  height:3rem;
  border-radius: 50%;
`;


const Img = styled.img `
  width:95%;
  height:100%;
  border-radius: 10px;
  margin-top: 0.5rem;
  margin-bottom:1rem;
`;

const Box = styled.div `
  font-family: body;
  padding: 10px;
  margin-left: 20px;
  margin-top:20px;
  background-color: rgba(255,255,255,0.2);
  width: 350px;
  height:500px;
  border-radius: 10px;  
  font-family: "title1";
`;

export default CommentForm;