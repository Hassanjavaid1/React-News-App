import React from 'react'
import '../CSS/Body_Skeleton.css'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Top_Headline_Skeleton() {
  return (
    <>
<div className="headlin_skeleton">
    <Skeleton circle className='headline_skeleton_background'/>
    </div>
    </>
  )
}

export default Top_Headline_Skeleton
