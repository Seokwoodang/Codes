import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth,db,storage } from '../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { addCommentFB } from '../redux/reducer';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { getCookie } from '../cookie';


const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const house = <FontAwesomeIcon icon={faHouse} /> 
  const file_link_ref = React.useRef(null);

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
      email : getCookie("email"),
    }))
    navigate("/");
  }
  console.log(userList);


  return (
    <>
    <Header>
    <Home onClick={()=>{navigate('/')}}>{house}</Home>
    <Buttons>
      <Button onClick={()=>{signOut(auth); navigate("/")}}>LogOut</Button>
    </Buttons>
  </Header>
    <Box>

      <p>이미지 코멘트 : <input ref={comment_ref}/></p>
      <input type="file" onChange={uploadFB}/>
      <br/><br/>
      <button onClick={upload}>업로드하기</button>
    </Box>
  </>
  )
}

const Box = styled.div`
margin: 100px auto 0px auto;
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


export default Post