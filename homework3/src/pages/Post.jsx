import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth,db,storage } from '../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useDispatch } from 'react-redux';
import { addCommentFB } from '../redux/reducer';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { getCookie } from '../cookie';
import { StLogin } from '../components/styled';

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const file_link_ref = React.useRef(null);
  const a = getCookie('email')
  const userList = useSelector(state => state.userList);
  const title_ref = useRef(null);
  const comment_ref=useRef(null);

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

  const upload=async()=>{
    dispatch(addCommentFB({
      image_url : file_link_ref.current.url,
      comment : comment_ref.current.value,
      email : getCookie("user_email"),
     nickname:getCookie("user_nickname"),
      user_pic:getCookie("user_pic")
    }))
    console.log(getCookie("user_email"))
    navigate("/");
  }

  return (
    <>
  <Header>
      <Title onClick={()=>{navigate('/')}}>Lord of the Ring</Title>
      <Buttons>
        <StLogin onClick={()=>{signOut(auth);navigate('/')}}>LogOut</StLogin>
      </Buttons>
    </Header>
    <Box>
      <P>Img Comment : <input ref={comment_ref}/></P>
      <input type="file" onChange={uploadFB}/>
      <br/><br/>
      <button onClick={upload}>업로드하기</button>
    </Box>
  </>
  )
}


const P = styled.p`
  color:white;
  margin-left: 15px;
  font-family: title1;
`;

const Title=styled.h1 `
  text-align: center;
  color:#fff53e;
  text-shadow:  0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #a12719, 0 0 30px #732a16, 0 0 40px #af3720, 0 0 55px #af3720, 0 0 75px #af3720, 2px 2px 2px rgba(206,197,0,0);
  font-family: title1;
  font-size: 3.2rem;
`;

const Box = styled.div`
margin: 100px auto 0px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px;
border-radius: 10px;
background-color: rgba(255,255,255,0.2);
width :500px;
height: 600px;
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

export default Post