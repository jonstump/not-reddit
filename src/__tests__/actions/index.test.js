import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('help queue actions', () => {

  it('updateTime should create UPDATE_TIME action', () => {
    expect(actions.updateTime(1, 'A few seconds ago')).toEqual({
      type: c.UPDATE_TIME,
      id: 1,
      formattedWaitTime: 'A few seconds ago'
    });
  });

  it('deletePost should create DELETE_POST action', () => {
    expect(actions.deletePost(1)).toEqual({
      type: c.DELETE_POST,
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
      id: 1,
      timeOpen: 0,
      formattedWaitTime: 'A few seconds ago'
    })).toEqual({
      type: c.ADD_POST,
      author: 'Mac Daddy',
      title: 'title',
      content: 'content',
      votes: 0,
      timeStamp: clock,
      id: 1,
      timeOpen: 0,
      formattedWaitTime: 'A few seconds ago'
    })
  });
});