import * as c from '../actions/ActionTypes';

export default(state = {}, action) => {
  const { title, content, author, votes, timeStamp, id } = action;
  switch(action.type) {
    case c.ADD_POST:
      return Object.assign({}, state, {
        [id]: {
          author: author,
          title: title,
          content: content,
          votes: votes,
          timeStamp: timeStamp,
          id: id
        }
      });
    case c.DELETE_POST:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
    return state;
  }
};

