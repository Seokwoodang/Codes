import React, { useState } from 'react'
import { useParams,Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from 'react-redux';


const Button=styled.div`
color:white;
background-color: #720eac;
border-radius: 5px;
font-size: 20px;
margin-top: 10px;
`;

const Box=styled.div`
    background-color: tomato;
    display: flex;
    align-items: center;
    border: 1;
    height:60%;
    width:50%;
    border-radius: 30px;
    flex-direction: column;
`;

const DetailFrame=styled.div`
 display: flex;
    justify-content: center;
    height :100vh;
`;

const QestionBox=styled.input`
  width: 300px;
  height:20px;
  margin-bottom: 5px;
`;

const SearchBox = () => {

  const[title,setTitle]=useState('');
  const[genre,setGenre]=useState('');
  const[actor,setActor]=useState('');
  const[director,setDirector]=useState('');
  const dispatch = useDispatch();

  const addContents=(event)=>{
    dispatch({type:"ADD_CONTENTS",payload:{title,genre,actor,director}}) 
    };
  
  return (
    <DetailFrame>
      <Box>
      <h1 className='DetailTitle'>title</h1>
      <h2>Tell me your favorite movie!!</h2>
      <div>
        <strong>Title</strong><br/>
        <QestionBox type="text" onChange={(event)=>setTitle(event.target.value)}/>
      </div>
      <div>
      <strong>Genre</strong><br/>
      <QestionBox type="text" onChange={(event)=>setGenre(event.target.value)}/>
      </div>
      <div>
      <strong>Actor</strong><br/>
      <QestionBox type="text" onChange={(event)=>setActor(event.target.value)}/>
      </div>
      <div>
      <strong>Director</strong><br/>
      <QestionBox type="text" onChange={(event)=>setDirector(event.target.value)}/>
      </div>
      <Link to="/"><Button>submit</Button></Link>
      </Box>
    </DetailFrame>

  )
}

export default SearchBox;