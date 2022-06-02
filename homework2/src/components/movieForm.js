import React from 'react'
import styled from "styled-components";

const MovieForm = ({item}) => {

  return (
    <div>
    <Box>
      <h2>{item.title}</h2>
      <p>{item.genre}</p>
      <p>{item.actor}</p>
      <p>{item.director}</p>
    </Box>
    </div>
  )
}

const Box = styled.div `
  margin-left: 20px;
  background-color: #CDC2AE;
  width: 200px;
  height:300px;
  border-radius: 10px;
  
  
`;



export default MovieForm;