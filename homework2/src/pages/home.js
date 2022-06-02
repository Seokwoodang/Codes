import React from 'react'
import { Link } from 'react-router-dom';
import styled, {keyframes} from "styled-components";
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
    <BackGround>
        <Header>
           <h1>영화가 좋아</h1>
        </Header>
        <Body onSubmit={detail}>
            <MovieList/>
            <Link to={`/detail`}><Button><strong>+</strong></Button></Link>
        </Body>
    </BackGround>
  )
}

const Header= styled.div`
  font-family: title;
  background-color: #C2DED1;
  display: flex;
  justify-content: center;
`;

const Body= styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Button = styled.div `
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  position:fixed;
  right: 50px;
  bottom:50px;
  border-radius: 50px;
  width:50px;
  height:50px;
  background-color: #354259;


`;

const BackGround = styled.div`
background-color: #ECE5C7;
height : 100vh;
width:100vw;
`;

export default Home;