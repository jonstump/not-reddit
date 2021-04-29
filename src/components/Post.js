import React from 'react';
import PropTypes from 'prop-types'


function Post(props){
  return (
    <>
      <div className="styledPost" onClick = {() => props.whenPostClicked(props.id)}>
        <span id="time" ><p>Posted by u/{props.author} {props.formattedWaitTime}</p></span>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <p>Votes: {props.votes}</p>
      </div>
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
  formattedWaitTime: PropTypes.string
};

// title
// content
// author
//votes