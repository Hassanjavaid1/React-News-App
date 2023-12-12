import React from 'react'
import '../CSS/Body_Skeleton.css'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Body_Skeleton() {
  return (
    <>
      <div className="skeleton">
        <div className="sub_skeleton">
          <Skeleton circle width={'40px'} height={'40px'} className='wide_circle_skeleton'/>
          <div className="wide_main_skeleton">
      <div className="wide_CT_skeleton">

            <Skeleton className='wide_category_skeleton' count={1}  />
            <Skeleton className='wide_category_skeleton' count={1}  />
      </div>
            <Skeleton color={'#f7f7f7'} count={2} className='wide_skeleton'/>
        </div>
        </div>

        </div>

    </>
  )
}

export default Body_Skeleton
