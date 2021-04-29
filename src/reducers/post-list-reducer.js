import * as c from '../actions/ActionTypes';

export default(state = {}, action) => {
  const { title, content, author, votes, timeStamp, id, formattedWaitTime, timeOpen } = action;
  switch(action.type) {
    case c.ADD_POST:
      return Object.assign({}, state, {
        [id]: {
          author: author,
          title: title,
          content: content,
          votes: votes,
          timeStamp: timeStamp,
          id: id,
          timeOpen: timeOpen,
          formattedWaitTime: formattedWaitTime
        }
      });
    case c.DELETE_POST:
      let newState = { ...state };
      delete newState[id];
      return newState;
    case c.UPDATE_TIME:
      const newPost = Object.assign({}, state[id], {formattedWaitTime});
      const updatedState = Object.assign({}, state , {
        [id]: newPost
      });
      return updatedState;
    default:
      return state;
  }
};

