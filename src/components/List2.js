import React from 'react';
import Post from './Post';

export default function List2({posts, handleLike}) {
	return (
		<div className="list">
			{
				posts.map((post) => {
						return <Post key={post.id} post={post} handleLike={handleLike} />
				})
			}
		</div>
	)
}
