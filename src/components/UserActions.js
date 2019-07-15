import React from 'react';

export default function UserActions({post, handleLike}) {
  return (
    <div>
      <button onClick={() => handleLike(post.id) }>
        {post.liked ? "unlike" : "like"}
      </button>
    </div>
  )
}
