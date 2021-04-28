export const deletePost = id => ({
  type: 'DELETE_POST',
  id
});

export const addPost = (post) => {
  const { title, content, author, votes, timeStamp, id } = post;
  return {
  type: 'ADD_POST',
  title: title,
  content: content,
  author: author,
  votes: votes,
  timeStamp: timeStamp,
  id: id
  }
}