import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types'

function PostList(props){

  // const styledPost = {
  //   marginLeft: "300px",
  //   marginRight: "300px",
  //   marginBottom: "10px",
  //   border: ".5px solid rgb(73, 73, 73)",
  //   backgroundColor: "rgb(16, 16, 16)",
  //   padding: "20px",
  //   color: "#D3D3D3",
  //   borderRadius: "5px"
  // }

  return(
    <>
    {props.postsArray.map((post) => 
      <div className="styledPost">
        <Post
          title = {post.title}
          content = {post.content}
          author = {post.author}
          votes = {post.votes}
          timeStamp = {post.timeStamp}
        />
        <hr/>
      </div>
      )}
    </>
  )
}

export default PostList;
// title
// content
// author
//votes