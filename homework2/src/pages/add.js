import React, { useState } from 'react'
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ADD_MOVIE } from '../redux/reducer';
import { db } from '../firebase';
import { loadMovieFB } from '../redux/reducer';

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



const Add=()=>{
  
  const[title,setTitle]=useState();
  const[genre,setGenre]=useState();
  const[actor,setActor]=useState();
  const[director,setDirector]=useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const addContents=(event)=>{
   
    event.preventDefault();
    dispatch(ADD_MOVIE({
      title:title,
      genre:genre,
      actor:actor,
      director:director})) 
      navigate("/");
  }

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
       <button type="submit">Add</button>
    </form>
    </DetailFrame>
  )
}

export default Add;