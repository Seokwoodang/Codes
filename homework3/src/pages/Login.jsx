import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebase';
import { getDocs,where,query,collection } from 'firebase/firestore';
import { setCookie } from '../cookie';



  const Login = () => {
  const house = <FontAwesomeIcon icon={faHouse} /> 
  const navigate = useNavigate();
  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);



  const loginFB= async () =>{
    console.log(id_ref.current.value,pw_ref.current.value)
    const user = await signInWithEmailAndPassword(
      auth, 
      id_ref.current.value, 
      pw_ref.current.value
      )
      console.log(user)
      const user_docs= await getDocs(query(
        collection(db,"users"),where("user_id","==",user.user.email)
      ));
      
      user_docs.forEach((u)=>{
        console.log(u.data());
        setCookie("email",u.data().user_id)
      })
      navigate("/");
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
      <h1>로그인페이지</h1>
      <p>
      아이디<br/>
      <input placeholder='아이디를 입력하시죠' ref = {id_ref}/>
      </p>
      <p>
      비밀번호<br/>
      <input placeholder='비밀번호는 남들에게 알려주지마세요' ref={pw_ref} type="password"/>
      </p>
      <button onClick={loginFB}>로그인하기</button>
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

export default Login;