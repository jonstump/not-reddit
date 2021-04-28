import React from 'react'
import PropTypes from 'prop-types'

function PostDetail(props){
  const { post, onClickingDelete, onClickingEdit } = props;
  return (
    <>
      <div className="styledPost">
        <p>Posted by u/{post.author} {post.timeStamp}</p>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p>Votes: {post.votes}</p>
        <button onClick={() => onClickingDelete(post.id) }>Delete</button>
        <button onClick={onClickingEdit}>Edit</button>
      </div>
    </>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default PostDetail;