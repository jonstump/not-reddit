import React from 'react'
import PropTypes from 'prop-types'
import ReuseableForm from './ReusableForm'

function EditPostForm (props) {
  const { post } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({ author: event.target.author.value, title: event.target.title.value, content: event.target.content.value, id: post.id, timeStamp: post.timeStamp, votes: post.votes })
  }

  return(
    <>
      <ReuseableForm formSubmissionHandler={handleEditPostFormSubmission}
      buttonText='Edit Post' />
    </>
  );
}

EditPostForm.propTypes = {
  onEditPost: PropTypes.func,
  post: PropTypes.object
}

export default EditPostForm;