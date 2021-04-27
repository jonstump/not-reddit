import React from 'react';

function Post(props){
  return (
    <>
      <p>Posted by u/{props.author} {props.timestamp}</p>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <p>Votes: {props.votes}</p>
    </>
  )
}

export default Post;


// title
// content
// author
//votes