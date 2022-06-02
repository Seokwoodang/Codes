import React from 'react'
import { useSelector } from 'react-redux'
import MovieForm from './movieForm';
import styled from "styled-components";

const MovieList = () => {

    const contentList = useSelector(state => state.contentList);
    console.log(contentList);
  return (
        <Body>
            {contentList&&contentList.map((item,index)=>(
           <MovieForm item={item} key={index}/>
            ))}
        </Body>
  )
}

const Body= styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;


export default MovieList;