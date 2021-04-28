import React from 'react'
import PropTypes from 'prop-types'


function PostDetail(props){
  const { post } = props;
  return (
    <>
      <div className="styledPost">
        <p>Posted by u/{post.author} {post.timestamp}</p>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p>Votes: {post.votes}</p>
      </div>
    </>
  )
}


// title
// content
// author
//votes


export default PostDetail;