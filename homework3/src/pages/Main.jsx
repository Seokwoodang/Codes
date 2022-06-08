import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState} from 'react';
import CommentList from '../components/commentList';
import { loadCommentFB } from '../redux/reducer';
import { useDispatch } from 'react-redux';
import { logout } from '../components/functions';
import { StLogin, Header, Buttons, Title,Post } from '../components/styled';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [is_login, setIsLogin] = useState(false);

  React.useEffect(()=>{
    dispatch(loadCommentFB());
  },[dispatch])

  const loginCheck= async(user)=>{
    if(user){
      setIsLogin(true);
    }
     else{
      setIsLogin(false);
    }
  }

  useEffect(()=>{
    onAuthStateChanged(auth,loginCheck);
  },[])

  const Go=()=>{
    navigate("/post");
  }
  return (
    <>
    <Header>
      <Title onClick={()=>{navigate('/')}}>Lord of the Ring</Title>
      <Buttons>
        {is_login?
        (<StLogin onClick={logout}>LogOut</StLogin>):
        (<StLogin onClick={()=>{navigate('/login')}}>Login</StLogin>)}
      </Buttons>
    </Header>
    <Body>
      <Ha>
      <CommentList/>
      </Ha>
    {is_login?(<Post onClick={Go}><strong>+</strong></Post>):null}
    </Body>
    </>
  )
}


const Ha=styled.div`
  width:100%;
  height:100%;
  display: grid,flex; 
  flex-direction:row;
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: repeat(99, 900px); 
  gap: 5px;
`;

const Body=styled.div`
  height:90vh;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: end;
  font-family: "title1";
`;

export default Main;