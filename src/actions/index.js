import * as c from './ActionTypes'

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
});

export const addPost = (post) => {
  const { title, content, author, votes, timeStamp, id } = post;
  return {
  type: c.ADD_POST,
  title: title,
  content: content,
  author: author,
  votes: votes,
  timeStamp: timeStamp,
  id: id
  }
}