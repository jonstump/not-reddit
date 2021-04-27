import React from 'react';
import PostList from './PostList';

class PostControl extends React.Component {
  examplePosts = [
    title = {"This is a post"}
    content = {"kdjhfgkjhdsfkjghsdkjfghkjdsfhgkjhsdfkjgh fdkjghksjdfhgkjsdfhgkjhsdfg"}
    author = {"MacDaddy"}
        votes = {"433"}
  ]

  
  render(){
    return (
      <PostList 
        postsArray = {examplePosts}
      />
    );
  }
}

export default PostControl;