import React from 'react'
import { useSelector } from 'react-redux'
import MovieForm from './movieForm';

const MovieList = () => {

    const contentList = useSelector(state => state.contentList);
    console.log(contentList);
  return (
        <div>
            {contentList&&contentList.map((item,index)=>(
           <MovieForm item={item} key={index}/>
            ))}
        </div>
  )
}

export default MovieList;