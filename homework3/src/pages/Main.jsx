import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState} from 'react';
import CommentList from '../components/commentList';
import { loadCommentFB } from '../redux/reducer';
import { useDispatch } from 'react-redux';
import { getCookie, removeCookie } from '../cookie';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const house = <FontAwesomeIcon icon={faHouse} /> 
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

  {is_login?(
    <Button>
      로그아웃
    </Button>
  ):(<Button>로그인</Button>)}

  const Go=()=>{
    navigate("/post");
  }
  return (
    <>
    <Header>
      <Title onClick={()=>{navigate('/')}}>Lord of the Ring</Title>
      <Buttons>
        {is_login?
        (<Button onClick={()=>{signOut(auth);removeCookie("user_email");removeCookie("user_pic");removeCookie("user_nickname")}}>LogOut</Button>):
        (<Button onClick={()=>{navigate('/login')}}>Login</Button>)}
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

const Title=styled.h1 `
  text-align: center;
  color:#fff53e;
  text-shadow:  0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #a12719, 0 0 30px #732a16, 0 0 40px #af3720, 0 0 55px #af3720, 0 0 75px #af3720, 2px 2px 2px rgba(206,197,0,0);
  font-family: title1;
  font-size: 3.2rem;
`;

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
  /* display: flex;
  justify-content: end;
  align-items: flex-end; */
`;

const Post=styled.div`
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

const Home = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Header=styled.div`
  height: 100px;
  align-items: center;
  background-color: #000000;
  position: relative;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  position:absolute;
  right : 1rem;
  top:1rem;
`;

const Button=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:130px;
  height:40px;
  background-color: #9A86A4;
  margin-left: 10px;
  border-radius: 10px;
`;

export default Main;