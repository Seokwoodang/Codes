import { Link, useParams } from "react-router-dom";
import styled from "styled-components";


const Make=(props)=>{
    const {day}=useParams();
    return(
        
         <Array>
            <Date><strong>{props.day}</strong></Date>
            <Circle score={props.num}/>
            <Circle score={props.num}/>
            <Circle score={props.num}/>
            <Circle score={props.num}/>
            <Circle score={props.num}/>
            <Link to={`/detail/${props.day}`}><Triangle /></Link>
        </Array>
        
       
    )
}

const Date=styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width  : 50px;
  height: 35px;
`;

const Circle=styled.div`
width : 35px;
height : 35px;
border-radius: 50%;
margin: 0 8px 0 8px;
vertical-align: middle;
&:nth-child(2){
    background-color: ${props=>(props.score>=1 ? '#b2dd4d':'#bdb6b5')};
}
&:nth-child(3){
    background-color: ${props=>(props.score>=2 ? '#b2dd4d':'#bdb6b5')};
}
&:nth-child(4){
    background-color: ${props=>(props.score>=3 ? '#b2dd4d':'#bdb6b5')};
}
&:nth-child(5){
    background-color: ${props=>(props.score>=4 ? '#b2dd4d':'#bdb6b5')};
}
&:nth-child(6){
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
    justify-content:center;
    align-items: center;
    margin-top: 10px;
`;

export default Make