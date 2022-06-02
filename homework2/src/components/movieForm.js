import React from 'react'
import { ReactDOM } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { delMovieFB } from '../redux/reducer';
import { useNavigate } from 'react-router-dom';
import { deleteMovieFB } from '../redux/reducer';

const MovieForm = ({item}) => {
  const update = <FontAwesomeIcon icon={faPen} />
  const trash = <FontAwesomeIcon icon={faTrashCan} />
  const navigate = useNavigate();
  return (
    <div>
    <Box>
      <h2>Title : {item.title}</h2>
      <p>{item.genre}</p>
      <p>{item.actor}</p>
      <p>{item.director}</p>
      <Things>
      <Update onClick={()=>{window.alert("업데이트 기능은 추후 업데이트 낄낄")}}>{update}</Update>
      <Update onClick={()=>{window.alert("삭제기능은 삭제 했습니다!! 낄낄")}}>{trash}</Update>
      </Things>

    </Box>
    </div>
  )
}

const delet=()=>{

}


const Things=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin: 10px;
`;

const Update=styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right:5px;
`;

const Box = styled.div `
  font-family: body;
  padding: 10px;
  margin-left: 20px;
  margin-top:20px;
  background-color: #CDC2AE;
  width: 200px;
  height:300px;
  border-radius: 10px;  
`;

export default MovieForm;