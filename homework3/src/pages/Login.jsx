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
import { StLogin, Header, Buttons, Title,Post } from '../components/styled';


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
        <StLogin onClick={()=>{navigate('/sign')}}>SignUp</StLogin>
      </Buttons>
    </Header>

    <Box>
      <h1>LogIn</h1>
      <p>
      I D <br/>
      <input placeholder='What is your ID,,,' ref = {id_ref}/>
      </p>
      <p>
      Password<br/>
      <input placeholder='What is your password,,,' ref={pw_ref} type="password"/>
      </p>
      <button onClick={loginFB}>LogIn</button>
    </Box>
    </>
  )
}


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