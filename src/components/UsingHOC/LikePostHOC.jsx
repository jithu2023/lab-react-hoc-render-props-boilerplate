import React from 'react'
import ParentHOC from "./ParentHOC";

const LikePostHOC=({handleLikeCount,likeCounter}) =>{

  return (
    <div>
      <button onClick={handleLikeCount}>Like Post {likeCounter}</button>
    </div>
  );
  
}

export default ParentHOC(LikePostHOC);