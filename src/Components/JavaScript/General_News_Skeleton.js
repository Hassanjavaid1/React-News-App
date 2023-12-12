import React from "react";
import "../CSS/Body_Skeleton.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function General_News_Skeleton() {
  return (
    <>
      <div className="general_skeleton">
        <div className="sub_general_skeleton">
          <Skeleton circle height={"6rem"} className="general_skeleton_img" />
          <div className="general_time_category_skeleton">
            <Skeleton
              count={1}
              height={"2rem"}
              className="skeleton_time_category"
            />
            <Skeleton
              count={1}
              height={"2rem"}
              className="skeleton_time_category"
            />
          </div>
          <div className="general_title_skeleton">
            <Skeleton count={1} height={"3rem"} className="skeleton_title" />
          </div>
          <div className="general_descripiton_skeleton">
            <Skeleton
              count={3}
              height={"2rem"}
              className="skeleton_descripition"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default General_News_Skeleton;
