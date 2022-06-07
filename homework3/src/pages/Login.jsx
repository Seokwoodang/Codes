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
      console.log(user);
      const user_docs= await getDocs(query(
        collection(db,"users"),where("user_id","==",user.user.email)
      ));
      
      user_docs.forEach((u)=>{
        console.log(u.data());
        setCookie("user_email",u.data().user_id)
        setCookie("user_nickname",u.data().user_nick)
        setCookie("user_pic",u.data().user_pic)
      })
      navigate("/");
}



  return (
    <>
    <Header>
      <Title onClick={()=>{navigate('/')}}>Lord of the Ring</Title>
      <Buttons>
        <Button onClick={()=>{navigate('/sign')}}>SignUp</Button>
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
const Title=styled.h1 `
  text-align: center;
  color:#fff53e;
  text-shadow:  0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #a12719, 0 0 30px #732a16, 0 0 40px #af3720, 0 0 55px #af3720, 0 0 75px #af3720, 2px 2px 2px rgba(206,197,0,0);
  font-family: title1;
  font-size: 3.2rem;
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
  position:relative;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  position: absolute;
  right : 1rem;
  top:1rem;
`;

const Button=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:200px;
  height:40px;
  background-color: #9A86A4;
  margin: 2rem 3rem 0 0;
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