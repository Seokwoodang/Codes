import React, { useState,useRef } from 'react'
import { useParams,Link,useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import ADD_MOVIE from "../redux/reducer/reducer"


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

const QuestionBox=styled.input`
  width: 300px;
  height:20px;
  margin-bottom: 5px;
`;



const ContentInput=()=>{

  const[title,setTitle]=useState();
  const[genre,setGenre]=useState();
  const[actor,setActor]=useState();
  const[director,setDirector]=useState();


  const dispatch = useDispatch();
  

  const addContents=()=>{

  }


  dispatch(ADD_MOVIE({
    title:title,
    genre:genre,
    actor:actor,
    director:director})
  )

  
  return (
    <DetailFrame>
      <form onSubmit={addContents}>
      <h1 className='DetailTitle'>title</h1>
      <h2>Tell me your favorite movie!!</h2>
      <div>
        <strong>Title</strong><br/>
      <QuestionBox onChange={(event)=>setTitle(event.target.value)}/>
      </div>
      <div>
      <strong>Genre</strong><br/>
      <QuestionBox onChange={(event)=>setGenre(event.target.value)}/>
      </div>
      <div>
      <strong>Actor</strong><br/>
      <QuestionBox onChange={(event)=>setActor(event.target.value)}/>
      </div>
      <div>
      <strong>Director</strong><br/>
      <QuestionBox onChange={(event)=>setDirector(event.target.value)}/>
      </div>
      <button type="submit">submit</button>
      </form>
    </DetailFrame>
  )
}

export default ContentInput;