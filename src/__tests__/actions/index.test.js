import * as actions from './../../actions';

describe('help queue actions', () => {
  it('deletePost should create DELETE_POST action', () => {
    expect(actions.deletePost(1)).toEqual({
      type: 'DELETE_POST',
      id: 1
    });
  });


  it('addPost should create ADD_POST action', () => {
    const clock = `${(new Date()).getMonth()}/${(new Date()).getDate()}/${(new Date()).getFullYear()}`
    expect(actions.addPost({
      author: 'Mac Daddy',
      title: 'title',
      content: 'content',
      votes: 0,
      timeStamp: clock,
      id: 1
    })).toEqual({
      type: 'ADD_POST',
      author: 'Mac Daddy',
      title: 'title',
      content: 'content',
      votes: 0,
      timeStamp: clock,
      id: 1
    })
  });
});