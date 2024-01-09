import React from 'react'
import ParentHOC from "./ParentHOC";

const LikeImageHOC=({handleLikeCount,likeCounter}) =>{

  return (
    <div>
      <button onClick={handleLikeCount}>Like Image {likeCounter}</button>
    </div>
  );
  
}

export default ParentHOC(LikeImageHOC);