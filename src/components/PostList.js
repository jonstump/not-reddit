import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types'

function PostList(props){
  return(
    <React.Fragment>
    {Object.values(props.postList).map((post) =>
      <div key = {post.id}>
        <Post
          whenPostClicked={props.onPostSelection}
          title = {post.title}
          content = {post.content}
          author = {post.author}
          votes = {post.votes}
          timeStamp = {post.timeStamp}
          formattedWaitTime={post.formattedWaitTime}
          id = {post.id}
        />
        <hr/>
      </div>
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};
export default PostList;