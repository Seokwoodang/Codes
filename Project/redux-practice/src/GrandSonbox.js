import React from 'react'
import { useSelector } from 'react-redux'

const GrandSonbox = () => {
    let count = useSelector((state)=>state.count);
  return (
    <div>this is GrandSonbox {count}</div>
  )
}

export default GrandSonbox;