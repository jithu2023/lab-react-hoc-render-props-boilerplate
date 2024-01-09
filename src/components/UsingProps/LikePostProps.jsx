import React from 'react'
import ParentProps from './ParentProps';

export default function LikeImage() {
  return (
    <ParentProps>
      {({ like, handleLike }) => (
        <button onClick={handleLike}>Like Post {like}</button>
      )}
    </ParentProps>
  );
}