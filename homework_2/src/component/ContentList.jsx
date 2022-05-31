import React from 'react';
import SearchBox from './ContentInput';
import { useSelector } from 'react-redux';
import ContentItem from './ContentItem';


const ContentList = () => {
    const contentList = useSelector(state=>state.contentList);
  return (
    <div>
        {contentList.map((item)=>(<ContentItem item={item}/>))}
    </div>
  )
}

export default ContentList