import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm';

function NewPostForm(props) {
  return(
    <>
      <ReusableForm formSubmissionHandler={handleNewPostSubmissionForm}
      buttonText='New Post' />
    </>
  );

  function handleNewPostSubmissionForm(event) {
    event.preventDefault();
    props.onNewPostCreation({author: event.target.author.value,
    title: event.target.title.value,
    content: event.target.content.value,
    votes: 0,
    timeStamp: `${(new Date()).getMonth()}/${(new Date()).getDate()}/${(new Date()).getFullYear()}`,
    id: v4()});
  }
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;