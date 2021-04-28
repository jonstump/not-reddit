import React from 'react';
import PropTypes from 'prop-types'


function Post(props){
  return (
    <>
      <p>Posted by u/{props.author} {props.timeStamp}</p>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <p>Votes: {props.votes}</p>
    </>
  )
}

export default Post;

Post.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
  votes: PropTypes.number,
  timeStamp: PropTypes.string,
};

// title
// content
// author
//votes