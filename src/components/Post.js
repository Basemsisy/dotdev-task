import React from 'react';
import UserActions from './UserActions'

export default function Post({post, handleLike}) {
  return (
    <div className="post">
      {post.name}
      <UserActions post={post} handleLike={handleLike}/>
    </div>
  )
}
