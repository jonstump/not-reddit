import React from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import EditPostForm from './EditPostForm';
import PostDetail from './PostDetail';
import { connect } from 'react-redux';

class PostControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      selectedPost: null,
      editing: false
    };
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
    const { title, content, author, votes, timeStamp, id } = newPost;
    const action = {
      type: 'ADD_POST',
      title: title,
      content: content,
      author: author,
      votes: votes,
      timeStamp: timeStamp,
      id: id
    }
    dispatch(action);
    this.setState({formVisible: false});
  }

  handleEditingPost = (postToEdit) => {
    const { dispatch } = this.props;
    const { title, content, author, votes, timeStamp, id } = postToEdit;
    const action = {
      type: 'ADD_POST',
      title: title,
      content: content,
      author: author,
      votes: votes,
      timeStamp: timeStamp,
      id: id
    }
    dispatch(action);
    this.setState({editing: false, selectedPost: null});
  }

  handleDeleteingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({selectedPost: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
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
        onClickingEdit = {this.handleEditClick} />
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