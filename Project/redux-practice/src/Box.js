import React from 'react'
import { useSelector } from 'react-redux'
import GrandSonbox from './GrandSonbox'

const Box = () => {
    let count= useSelector((state)=>state.count)
  return (
    <div>
        this is box {count}
        <GrandSonbox/>
    </div>
  )
}

export default Box