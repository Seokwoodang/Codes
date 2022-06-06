import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { async } from '@firebase/util';
import { useState } from 'react';

const Main = () => {
  const navigate = useNavigate();
  const house = <FontAwesomeIcon icon={faHouse} /> 
  const [is_login, setIsLogin] = useState(false);

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
      <Home onClick={()=>{navigate('/')}}>{house}</Home>
      <Buttons>
        {is_login?
        (<Button onClick={()=>{signOut(auth);}}>LogOut</Button>):
        (<Button onClick={()=>{navigate('/login')}}>Login</Button>)}
      </Buttons>
    </Header>
    <Body>
    {is_login?(<Post onClick={Go}><strong>+</strong></Post>):null}
    </Body>
    </>
  )
}

const K=styled.div`
  width:30px;
  height:30px;
  background-color: yellow;
`;

const Body=styled.div`
  height:90vh;
  display: flex;
  justify-content: end;
  align-items: flex-end;
`;

const Post=styled.div`
  background-color: tomato;
  border-radius: 50px;
  width:50px;
  height:50px;
  margin: 0 40px 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
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

export default Main;