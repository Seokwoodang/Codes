import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,storage } from '../firebase';
import { collection,addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { addUserFB } from '../redux/signing';
import { async } from '@firebase/util';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useRef } from 'react';
import { setCookie } from '../cookie';
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const house = <FontAwesomeIcon icon={faHouse} /> 
  const[id,setId]=useState('');
  const[nick,setNick]=useState('');
  const[pw,setPw]=useState(0);
  const[pwcheck,setPwcheck]=useState(0);
  const file_link_ref = React.useRef(null);



  const sign=async()=>{

    const user = await createUserWithEmailAndPassword(
      auth,
      id,
      pw
      );
      console.log(user);

    dispatch(addUserFB({
      user_id:user.user.email,
      user_pw:pw,
      user_nick:nick,
      user_pwcheck:pwcheck,
      user_pic:file_link_ref.current.url
    }))
        setCookie("user_email",user.user.email)
        setCookie("user_nickname",nick)
        setCookie("user_pic",file_link_ref.current.url)

  navigate("/")  
  }

  const uploadFB = async(e)=>{
    console.log(e.target.files)
    const uploaded_file= await uploadBytes(ref(
      storage,`images/${e.target.files[0].name}`),
      e.target.files[0]
    )
    console.log(uploaded_file);
    
    const file_url=await getDownloadURL(uploaded_file.ref);

    console.log(file_url);
    file_link_ref.current= {url:file_url};
  }


  return (
    <>
    <Header>
      <Title onClick={()=>{navigate('/')}}>Lord of the Ring</Title>
      <Buttons>
        <Button onClick={()=>{navigate('/login')}}>Login</Button>
      </Buttons>
    </Header>
    <Box>
      <h1>Sign up</h1>
      <input type="file" onChange={uploadFB}/>
      <p>
      ID<br/>
      <input placeholder='Tell me your name' onChange={(event)=>setId(event.target.value)} />
      </p>
      <p>
      NickName<br/>
      <input placeholder='How can I call you' onChange={(event)=>setNick(event.target.value)} />
      </p>
      <p>
      Password<br/>
      <input placeholder='give me your password' onChange={(event)=>setPw(event.target.value)} type="password"/>
      </p>
      <p>
      PasswordCheck<br/>
      <input placeholder='give me your password again' onChange={(event)=>setPwcheck(event.target.value)} type="password"/>
      </p>
      
      <button onClick={sign}>Sign up</button>
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

export default Signup;