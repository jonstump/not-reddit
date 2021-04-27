import postListReducer from '../../reducers/post-list-reducer';
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
    id: 1
  }
  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, {type: null})).toEqual({});
  });
  test('Should add a new post to the masterPostList', () => {
    const { title, content, author, votes, timeStamp, id } = postFormData;
    action = {
      type: "ADD_POST",
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
      type: 'DELETE_POST',
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