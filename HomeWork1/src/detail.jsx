import React from "react";
import "./detail.css";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Detail=()=>{
    let {day} = useParams();
    const [score,setScore]=useState(0);

    const Cliked=(event)=>{
        let circleid=event.target.id;
        setScore(circleid);
    }

  


    return (
        <div className="App">
          <Container>
            <h3>How is your {day}</h3>
            <Array>
                <Circle id='1' score={score} onClick={Cliked}/>
                <Circle id='2' score={score} onClick={Cliked}/>
                <Circle id='3' score={score} onClick={Cliked}/>
                <Circle id='4' score={score} onClick={Cliked}/>
                <Circle id='5' score={score} onClick={Cliked}/>
            </Array>
            
            <Link to="/"><Button>평점남기기</Button></Link>
          </Container>
        </div>
    )
}
const Container=styled.div`
   background-color: rgb(255, 255, 255);
    width:50vw;
    max-width:350px;
    padding:50px;
    border:1px solid #ddd;
    margin:auto;
    border-radius:5px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;  
    box-shadow: 0 0 10px black;
`;

const Button=styled.div`
    background-color: #460b8a;
    color : white;
    border-radius: 30px;
    align-items: center;
    margin-top: 50px;
    min-width: 200px;
`;

const Circle=styled.div`
width : 35px;
height : 35px;
border-radius: 50%;
margin: 0 8px 0 8px;
vertical-align: middle;
&:nth-child(1){
    background-color: ${props=>(props.score>=1 ? '#b2dd4d':'#bdb6b5')};
}
&:nth-child(2){
    background-color: ${props=>(props.score>=2 ? '#b2dd4d':'#bdb6b5')};
}
&:nth-child(3){
    background-color: ${props=>(props.score>=3 ? '#b2dd4d':'#bdb6b5')};
}
&:nth-child(4){
    background-color: ${props=>(props.score>=4 ? '#b2dd4d':'#bdb6b5')};
}
&:nth-child(5){
    background-color: ${props=>(props.score>=5 ? '#b2dd4d':'#bdb6b5')};
}
`;

const Triangle=styled.div`
width: 0px;
height: 0px;
border-left: 35px solid #8411b1;
border-top: 18px solid transparent;
border-bottom: 18px solid transparent;
`;

const Array=styled.div`
    display:flex;
    align-items: center;
`;


export default Detail;