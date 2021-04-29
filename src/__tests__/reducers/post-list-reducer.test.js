import postListReducer from '../../reducers/post-list-reducer';
import * as c from '../../actions/ActionTypes';
import Moment from 'moment';

describe('postListReducer', () => {
  const currentState = {
    1: { title: "This is a post",
        content: "kdjhfgkjhdsfkjghsdkjfghkjdsfhgkjhsdfkjgh fdkjghksjdfhgkjsdfhgkjhsdfg",
        author: "MacDaddy",
        votes: "433",
        timeStamp: `${(new Date()).getMonth()}/${(new Date()).getDate()}/${(new Date()).getFullYear()}`,
        id: 1
      },
    2: { title: "This is a really cool post",
        content: "kdjhfgkjhdsfkjghsdkjfghkjdsfhgkjhsdfkjgh fdkjghksjdfhgkjsdfhgkjhsdfg",
        author: "MacSonny",
        votes: "123",
        timeStamp: `${(new Date()).getMonth()}/${(new Date()).getDate()}/${(new Date()).getFullYear()}`,
        id: 2
      }
  }
  let action;
  const postFormData = {
    title: "This is a post",
    content: "kdjhfgkjhdsfkjghsdkjfghkjdsfhgkjhsdfkjgh fdkjghksjdfhgkjsdfhgkjhsdfg",
    author: "MacDaddy",
    votes: "433",
    timeStamp: `${(new Date()).getMonth()}/${(new Date()).getDate()}/${(new Date()).getFullYear()}`,
    timeOpen: 0,
    id: 1
  }

  test('Should add a formatted wait time to post entry', () => {
    const { title, content, author, votes, timeStamp, id, timeOpen } = postFormData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes',
      id: id
    };
    expect(postListReducer({ [id] : postFormData }, action)).toEqual({
      [id] : {
        author: author,
        title: title,
        content: content,
        timeOpen: timeOpen,
        votes: votes,
        id: id,
        timeStamp: timeStamp,
        formattedWaitTime: '4 minutes'
      }
    })
  })

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, {type: null})).toEqual({});
  });

  test('Should add a new post to the masterPostList', () => {
    const { title, content, author, votes, timeStamp, id } = postFormData;
    action = {
      type: c.ADD_POST,
      title: title,
      content: content,
      author: author,
      votes: votes,
      timeStamp: timeStamp,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        content: content,
        author: author,
        votes: votes,
        timeStamp: timeStamp,
        id: id
      }
    });
  });
  test('Should delete a post', () => {
    action = {
      type: c.DELETE_POST,
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual(
      {
      2: { title: "This is a really cool post",
        content: "kdjhfgkjhdsfkjghsdkjfghkjdsfhgkjhsdfkjgh fdkjghksjdfhgkjsdfhgkjhsdfg",
        author: "MacSonny",
        votes: "123",
        timeStamp: `${(new Date()).getMonth()}/${(new Date()).getDate()}/${(new Date()).getFullYear()}`,
        id: 2
      }
    });
  });
});