import React from 'react'
import i1 from "./i1.jpeg"
import i2 from "./i2.jpg"

const Mapex = () => {
    const images =[{id:1,pic:i1},{id:2,pic:i2}]
  return (
    <>
    {
        images.map((val)=>
        {
            return <img src={val.pic} height="200px" width="200px" />
        }

        )
    }
    </>
  )
}

export default Mapex
