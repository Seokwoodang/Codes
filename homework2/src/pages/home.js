import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import MovieList from "../components/movielist"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadMovieFB } from '../redux/reducer';

const Home = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();


  React.useEffect(()=>{
    dispatch(loadMovieFB());
  },[])

  const detail=()=>{
    navigate("/");
    }

  return (
    <div>
        <div className='title'>
            hello
        </div>
        <div onSubmit={detail} className='mainBody'>
            <MovieList/>
            
            <Link to={`/detail`}><Button><strong>+</strong></Button></Link>
        </div>
    </div>
  )
}

const Button = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  position:fixed;
  right: 50px;
  bottom:50px;
  border-radius: 50px;
  width:50px;
  height:50px;
  background-color: tomato;
`;

export default Home;