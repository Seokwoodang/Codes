import React from 'react'
import styled from 'styled-components';

const Comments = (item) => {
  console.log(item.item);
  console.log(item.item.user_email);
  return (
    <div>
    <Pro>
        <User_pic src={item.item.user_pic}/> 
        <Nick>{item.item.user_nickname}</Nick>
        <P>{item.item.comment}</P>
    </Pro>
    </div>
  )
}


const Pro = styled.div`
  width:100%;
  height:3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px;
`;

const Nick = styled.div`
  margin-left:1rem;
  color : white;
`;

const P = styled.p`
  color:white;
  margin-left: 15px;
`;

const User_pic = styled.img`
  width:3rem;
  height:3rem;
  border-radius: 50%;
`;



export default Comments