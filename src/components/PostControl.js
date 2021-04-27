import React from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import { connect } from 'react-redux';

class PostControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      selectedPost: null,
      // examplePosts: [
      //   { title: "This is a post",
      //     content: "kdjhfgkjhdsfkjghsdkjfghkjdsfhgkjhsdfkjgh fdkjghksjdfhgkjsdfhgkjhsdfg",
      //     author: "MacDaddy",
      //     votes: "433",
      //     timeStamp: `${(new Date()).getMonth()}/${(new Date()).getDate()}/${(new Date()).getFullYear()}` 
      //   },
      //   { title: "This is a really cool post",
      //     content: "kdjhfgkjhdsfkjghsdkjfghkjdsfhgkjhsdfkjgh fdkjghksjdfhgkjsdfhgkjhsdfg",
      //     author: "MacSonny",
      //     votes: "123",
      //     timeStamp: `${(new Date()).getMonth()}/${(new Date()).getDate()}/${(new Date()).getFullYear()}` 
      //   },
      //   { title: "Posty McPostface",
      //     content: "kdjhfgkjhdsfkjghsdkjfghkjdsfhgkjhsdfkjgh fdkjghksjdfhgkjsdfhgkjhsdfg",
      //     author: "MacGramp",
      //     votes: "533",
      //     timeStamp: `${(new Date()).getMonth()}/${(new Date()).getDate()}/${(new Date()).getFullYear()}` 
      //   },
      //   { title: "No yOU are A PoST",
      //     content: "kdjhfgkjhdsfkjghsdkjfghkjdsfhgkjhsdfkjgh fdkjghksjdfhgkjsdfhgkjhsdfg",
      //     author: "MacGrany",
      //     votes: "423",
      //     timeStamp: `${(new Date()).getMonth()}/${(new Date()).getDate()}/${(new Date()).getFullYear()}` 
      //   },
      //   { title: "Posty post",
      //     content: "kdjhfgkjhdsfkjghsdkjfghkjdsfhgkjhsdfkjgh fdkjghksjdfhgkjsdfhgkjhsdfg",
      //     author: "Macladdy",
      //     votes: "993",
      //     timeStamp: `${(new Date()).getMonth()}/${(new Date()).getDate()}/${(new Date()).getFullYear()}`
      //   }
      // ]
    };
  }

  handleButtonClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  handleSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({selectedPost: selectedPost})
  }

  render(){


    let currentView = null;
    let buttonText = null;
    if (this.state.formVisible){
      currentView = <NewPostForm />
      buttonText = "Return to Posts"
    } else {
      currentView = <PostList
        postsArray = {this.state.examplePosts}
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

export default PostControl;