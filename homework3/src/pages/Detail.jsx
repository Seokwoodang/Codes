import React from 'react'
import styled from "styled-components";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { removeCookie } from '../cookie';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../cookie';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteCommentFB } from '../redux/reducer';
import { useState } from 'react';
import { logout } from '../components/functions';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { StLogin, Header, Buttons, Title,Post } from '../components/styled';
import { async } from '@firebase/util';
import { addTwoFB } from '../redux/two';
import Comments from '../components/comments';
import { loadTwoFB } from '../redux/two';

const Detail = () => {

  const [is_login, setIsLogin] = useState(false);
  const [is_user,setIsUser]=useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const useremail = getCookie("user_email")
  const {id} = useParams();
  const data = useSelector(state=>state.reducer.commentList);
  const datanow = data.filter((value)=>value.id === id)
  const comment_ref = React.useRef(null);
  const commentList = useSelector(state=>state.comment.twoList);
  const commentnow = commentList.filter((value)=>value.post_id===id);

  const loginCheck=(user)=>{
    if(user){
      setIsLogin(true);
    }
    else{
      setIsLogin(false);
    }
  }

  const comment= async(id)=>{
    dispatch(addTwoFB({
      comment:comment_ref.current.value,
      user_pic:getCookie("user_pic"),
      user_email:getCookie("user_email"),
      user_nickname:getCookie("user_nickname"),
     post_id:id,
    }))
  }

  
  React.useEffect(()=>{
    dispatch(loadTwoFB());
  },[dispatch])

  useEffect(()=>{
    onAuthStateChanged(auth,loginCheck);
  },[])

  const delet= (id) =>{
    dispatch(deleteCommentFB(id))
    navigate("/");
  }
  
  const move = ()=>{
    navigate(`/update/${id}`)
  }

return (
    <> 
    <Header> 
    <Title onClick={() => { navigate('/')}}>Lord of the Ring</Title>
    <Buttons>
      {is_login?
        <StLogin onClick={logout}>LogOut</StLogin>:
            <StLogin onClick={()=>{navigate("/login")}}>Login</StLogin>}
    </Buttons>
</Header>
<Box>
      <Di>
      <Img src={datanow[0].image_url}/>
      </Di>
      <Pro>
        <User_pic src={datanow[0].user_pic}/> 
        <Nick>{datanow[0].nickname}</Nick>
     {(useremail===datanow[0].email)?
      <Stdeled>
        <Func onClick={move}>edit</Func>
        <Func onClick={()=>{delet(id)}}>delete</Func>
      </Stdeled>:<></>}
      </Pro>
      <P>{datanow[0].comment}</P>
      <CommentBox>
        <Line/>
        <br/><p>Wanna Say Something?</p>
        <Comment ref={comment_ref}/>
        <button onClick={()=>{comment(id)}}>submit</button>
        <P>Comments</P>
        {commentnow&&commentnow.map((item,index)=>(
          <Comments item={item} key={index}/>
        ))} 
      </CommentBox>
    </Box>
    </>
)
}

const Line = styled.div`
  height:2px;
  background-color: black;
`;

const CommentBox = styled.div`
  
`;

const Comment = styled.input`
  background-color: rgba(255,255,255,0.2);
  color:white;
`;

const Func=styled.div`
  background-color: white;
  border-radius: 1rem;
  width:4rem;
  height:2rem;
  margin-left:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color: black;
    color:white;
  }
`;

const Stdeled=styled.div`
width:68%;
display:flex;
justify-content: end;
`;

const Nick = styled.div`
  margin-left:1rem;
  color : white;
`;

const P = styled.p`
  color:white;
  margin-left: 15px;
`;


const Pro = styled.div`
  width:100%;
  height:3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px;
`;

const Di = styled.div`
  
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const User_pic = styled.img`
  width:3rem;
  height:3rem;
  border-radius: 50%;
`;


const Img = styled.img `
  width:95%;
  height:100%;
  border-radius: 10px;
  margin-top: 0.5rem;
  margin-bottom:1rem;
`;
const Box = styled.div `
  font-family: body;
  padding: 10px;
  margin: 2rem auto auto auto;
  background-color: rgba(255,255,255,0.2);
  width: 50rem;
  height:100%;
  border-radius: 10px;  
  font-family: "title1";
`;




export default Detail