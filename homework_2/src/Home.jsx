import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';
import styled from "styled-components";
import ContentList from './component/ContentList';
import { db } from './firebase';
import { collection, getDoc, getDocs, addDoc ,updateDoc, doc, deleteDoc} from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { loadMovieFB } from './component/ContentInput';

const Home = () => {
  const dispatch = useDispatch()

  
    /* console.log(db);
    const docRef = doc(db,"movie","c3t3UhaoJTiXcLEm1nAd");
  deleteDoc(docRef); 삭제하기
    const docRef = doc(db,"movie","c3t3UhaoJTiXcLEm1nAd");
    updateDoc(docRef,{completed:true});  // 수정하기!!
   addDoc(collection(db,"movie"),{text:"new",completed:false})  추가하기*/
  return (
    <div>
        <div className='title'>
            hello
        </div>
        <div className='mainBody'>
            <ContentList/>
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