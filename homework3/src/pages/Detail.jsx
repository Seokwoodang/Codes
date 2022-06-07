import React from 'react'
import styled from "styled-components";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { removeCookie } from '../cookie';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../cookie';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { collection,getDoc,doc,query,where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { deleteCommentFB } from '../redux/reducer';

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();

  const delet= (id) =>{
    dispatch(deleteCommentFB(id))
    navigate("/");
  }
  
return (
    <> 
    < Header > 
    <Title onClick={() => {
            navigate('/')
        }}>Lord of the Ring</Title>
    <Buttons>
        <Button
            onClick={() => {
                signOut(auth);
                removeCookie("user_email");
                removeCookie("user_pic");
                removeCookie("user_nickname");
                navigate("/")
            }}>LogOut</Button>
    </Buttons>
</Header>

<Box>
   <button onClick={navigate("/")}>수정</button>
    <button onClick={()=>delet(id)}>삭제</button> 
    </Box>
    </>
)

          }
const Box = styled.div `
  font-family: body;
  padding: 10px;
  margin: 5rem auto auto auto;
  background-color: rgba(255,255,255,0.2);
  width: 500px;
  height:700px;
  border-radius: 10px;  
  font-family: "title1";
`;

const Header=styled.div`
  height: 100px;
  align-items: center;
  background-color: #000000;
  position: relative;
`;

const Title=styled.h1 `
  text-align: center;
  color:#fff53e;
  text-shadow:  0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #a12719, 0 0 30px #732a16, 0 0 40px #af3720, 0 0 55px #af3720, 0 0 75px #af3720, 2px 2px 2px rgba(206,197,0,0);
  font-family: title1;
  font-size: 3.2rem;
`;

const P = styled.p`
  color:white;
  margin-left: 15px;
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


export default Detail