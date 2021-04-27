import React from 'react';
import PostList from './PostList';

class PostControl extends React.Component {
  render(){
    let examplePosts = [
      { title: "This is a post",
        content: "kdjhfgkjhdsfkjghsdkjfghkjdsfhgkjhsdfkjgh fdkjghksjdfhgkjsdfhgkjhsdfg",
        author: "MacDaddy",
        votes: "433", 
        timeStamp: `${(new Date()).getMonth()}/${(new Date()).getDate()}/${(new Date()).getFullYear()}` 
      },
      { title: "This is a really cool post",
        content: "kdjhfgkjhdsfkjghsdkjfghkjdsfhgkjhsdfkjgh fdkjghksjdfhgkjsdfhgkjhsdfg",
        author: "MacSonny",
        votes: "123",
        timeStamp: `${(new Date()).getMonth()}/${(new Date()).getDate()}/${(new Date()).getFullYear()}` 
      },
      { title: "Posty McPostface",
        content: "kdjhfgkjhdsfkjghsdkjfghkjdsfhgkjhsdfkjgh fdkjghksjdfhgkjsdfhgkjhsdfg",
        author: "MacGramp",
        votes: "533",
        timeStamp: `${(new Date()).getMonth()}/${(new Date()).getDate()}/${(new Date()).getFullYear()}` 
      },
      { title: "No yOU are A PoST",
        content: "kdjhfgkjhdsfkjghsdkjfghkjdsfhgkjhsdfkjgh fdkjghksjdfhgkjsdfhgkjhsdfg",
        author: "MacGrany",
        votes: "423",
        timeStamp: `${(new Date()).getMonth()}/${(new Date()).getDate()}/${(new Date()).getFullYear()}` 
      },
      { title: "Posty post",
        content: "kdjhfgkjhdsfkjghsdkjfghkjdsfhgkjhsdfkjgh fdkjghksjdfhgkjsdfhgkjhsdfg",
        author: "Macladdy",
        votes: "993",
        timeStamp: `${(new Date()).getMonth()}/${(new Date()).getDate()}/${(new Date()).getFullYear()}`
      }
    ]

    return (
      <PostList
        postsArray = {examplePosts}
      />
    );
  }
}

export default PostControl;