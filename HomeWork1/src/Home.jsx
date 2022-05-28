import { useState } from 'react';
import "./style.css";
import styled from "styled-components";
import Make from './Figure';

const Avg = (props)=>{
    let sum = 0;
    let avg;
    for(let i = 0;i<7;i++){
      sum +=props.score[i];
    }
    avg = Math.floor(sum /7*10)/10;
   return (
     <h2 id ="Avg">Average<br/>{avg}</h2>
   )
  }
  
  function Home() {
    
    const day=['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    let arr=day.map(x=>Math.ceil(Math.random()*5));
    let [num, setNum] = useState(arr);
    
    const Reset=()=>{
      let arr = [0,0,0,0,0,0,0];
      setNum(arr)
      console.log(num)
    }
  
    return (
        <App>
          <Container>
            <h3>How was your Week?</h3>
            {day.map((value,index)=><Make key={day[index]} num={num[index]} day={day[index]}/>)}

            <div id ="aaa"></div>
            <Avg score={num}/>
            <Button score={num} onClick={Reset}>Reset</Button>
          </Container>
        </App>
      );
    }

    const App=styled.div`
      background-color  : #ffffff;
      height:100vh;
    width:100vw;
    display:flex;
    `;
     
    const Container=styled.div`
     background-color: rgb(255, 255, 255);
    width:50vw;
    max-width:350px;
    padding:16px;
    border:1px solid #ddd;
    margin:auto;
    border-radius:5px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    `;
        


     const Button=styled.button`
       background-color: #15133C;
       color:white;
       border-radius: 10%;
     `;
    
    
    export default Home;
    