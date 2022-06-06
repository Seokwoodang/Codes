import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { collection,addDoc } from 'firebase/firestore';
import { db } from '../firebase';


const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const house = <FontAwesomeIcon icon={faHouse} /> 
  const[id,setId]=useState('');
  const[nick,setNick]=useState('');
  const[pw,setPw]=useState(0);
  const[pwcheck,setPwcheck]=useState(0);
  

  const sign=async ()=>{
    
  const user = await createUserWithEmailAndPassword(
    auth,
    id,
    pw
    );
    console.log(user);

  const user_doc = await addDoc(collection(db,"users"),{
    user_id:user.user.email,
    user_pw:pw,
    user_pwch:pwcheck,
    user_nick:nick
  })
  navigate("/")  
  }


  return (
    <>
    <Header>
      <Home onClick={()=>{navigate('/')}}>{house}</Home>
      <Buttons>
        <Button onClick={()=>{navigate('/sign')}}>SignUp</Button>
        <Button onClick={()=>{navigate('/login')}}>Login</Button>
      </Buttons>
    </Header>
    <Box>
      <h1>회원가입</h1>
      <p>
      아이디<br/>
      <input placeholder='아이디를 입력하시죠' onChange={(event)=>setId(event.target.value)} />
      </p>
      <p>
      닉네임<br/>
      <input placeholder='닉네임을 입력합시다' onChange={(event)=>setNick(event.target.value)} />
      </p>
      <p>
      비밀번호<br/>
      <input placeholder='비밀번호는 남들에게 알려주지마세요' onChange={(event)=>setPw(event.target.value)} type="password"/>
      </p>
      <p>
      비밀번호 확인<br/>
      <input placeholder='다쓴 비밀번호도 다시 보자!!' onChange={(event)=>setPwcheck(event.target.value)} type="password"/>
      </p>
      
      <button onClick={sign}>회원가입하기</button>
    </Box>
    </>
  )
}

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

const Box = styled.div`
margin: 50px auto 0px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px;
border-radius: 10px;
background-color: #F1F0C0;
width :500px;
height: 600px;
`;

export default Signup;