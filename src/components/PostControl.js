import React from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import EditPostForm from './EditPostForm';
import PostDetail from './PostDetail';
import * as a from './../actions';
import { connect } from 'react-redux';
import Moment from 'moment';

class PostControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      selectedPost: null,
      editing: false
    };
  }

  componentDidMount(){
    this.waitTimeUpdateTimer = setInterval(() =>
    this.updatePostElapsedWaitTime(),
    1000
    );
  }

  componentDidUpdate(){
    console.log("component updated!");
  }

  componentWillUnmount(){
    console.log("component unmounted");
    clearInterval(this.waitTimeUpdateTimer);
  }

  updatePostElapsedWaitTime = () => {
    console.log("tick");
  }

  handleButtonClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
  }

  handleSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({selectedPost: selectedPost})
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const action = a.addPost(newPost);
    dispatch(action);
    this.setState({formVisible: false});
  }

  handleEditingPost = (postToEdit) => {
    const { dispatch } = this.props;
    const action = a.addPost(postToEdit)
    dispatch(action);
    this.setState({editing: false, selectedPost: null});
  }

  handleDeleteingPost = (id) => {
    const { dispatch } = this.props;
    const action = a.deletePost(id);
    dispatch(action);
    this.setState({selectedPost: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleUpvoteClick = (id) => {
    const selectedPost = this.props.masterPostList[id];
    selectedPost.votes += 1;
    this.setState({selectedPost: selectedPost})
    }

  handleDownvoteClick = (id) => {
    const selectedPost = this.props.masterPostList[id];
    selectedPost.votes -= 1;
    this.setState({selectedPost: selectedPost})
    }

  render(){
    let currentView = null;
    let buttonText = null;

    if (this.state.editing){
      currentView = <EditPostForm
        post = {this.state.selectedPost}
        onEditPost = {this.handleEditingPost}
      />
      buttonText = "Return to Posts"
    } else if (this.state.formVisible){
      currentView = <NewPostForm
        onNewPostCreation = {this.handleAddingNewPostToList}
      />
      buttonText = "Return to Posts"
    } else if(this.state.selectedPost != null){
      currentView = <PostDetail post = {
        this.state.selectedPost}
        onClickingDelete = {this.handleDeleteingPost}
        onClickingEdit = {this.handleEditClick}
        onClickingUpvote = {this.handleUpvoteClick}
        onClickingDownvote = {this.handleDownvoteClick}
        />
      buttonText = "Return to Posts"
    } else {
      currentView = <PostList
        postList = {this.props.masterPostList} onPostSelection = {this.handleSelectedPost}
      />
      buttonText = "Create new post"
    }
    return (
      <>
        <button onClick={this.handleButtonClick}>{buttonText}</button>
        {currentView}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;