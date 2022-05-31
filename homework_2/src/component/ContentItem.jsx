import React from 'react'

const ContentItem = ({item}) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.genre}</p>
      <p>{item.actor}</p>
      <p>{item.director}</p>
    </div>
  )
}

export default ContentItem;