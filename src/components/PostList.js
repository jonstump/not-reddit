import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types'

function PostList(props){
  return(
    <React.Fragment>
    {Object.values(props.postList).map((post) =>
      <div className="styledPost">
        <Post
          title = {post.title}
          content = {post.content}
          author = {post.author}
          votes = {post.votes}
          timeStamp = {post.timeStamp}
          id = {post.id}
          key = {post.id}
        />
        <hr/>
      </div>
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  // onPostSelection: PropTypes.func
};
export default PostList;