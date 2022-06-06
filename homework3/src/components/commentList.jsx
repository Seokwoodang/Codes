import React from 'react'
import { useSelector } from 'react-redux'
import CommentForm from './commentForm';
import styled from "styled-components";


const CommentList = () => {

    const commentList = useSelector(state => state.reducer.commentList);
    console.log("this is comment List : "+commentList);
    console.log(commentList)
  return (
        <Body>
            {commentList&&commentList.map((item,index)=>(
           <CommentForm item={item} key={index}/>
            ))} 
        </Body>
  )
}

const Body= styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;


export default CommentList;