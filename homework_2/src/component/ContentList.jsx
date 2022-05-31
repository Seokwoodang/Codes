import React from 'react';
import {useSelector} from 'react-redux';
import ContentItem from './ContentItem';

const ContentList = () => {
    const contentList = useSelector(state => state.contentList);
    console.log(contentList);
    return (
        <div>
            {contentList&&contentList.map((item,index)=>(
            <ContentItem key={index} item={item}/>
            ))}
        </div>
    )
}

export default ContentList;