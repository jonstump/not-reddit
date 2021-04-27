import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types'

function PostList(){
  return(
    <>
      <Post
        title = {"This is a post"}
        content = {"kdjhfgkjhdsfkjghsdkjfghkjdsfhgkjhsdfkjgh fdkjghksjdfhgkjsdfhgkjhsdfg"}
        author = {"MacDaddy"}
        votes = {"433"}
      />
    </>
  )
}

export default PostList;
// title
// content
// author
//votes