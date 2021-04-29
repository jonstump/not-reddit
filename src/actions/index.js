import * as c from './ActionTypes'

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
});

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});

export const addPost = (post) => {
  const { title, content, author, votes, timeStamp, id, timeOpen, formattedWaitTime } = post;
  return {
  type: c.ADD_POST,
  title: title,
  content: content,
  author: author,
  votes: votes,
  timeStamp: timeStamp,
  id: id,
  formattedWaitTime: formattedWaitTime,
  timeOpen: timeOpen
  }
}