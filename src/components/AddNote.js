import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function NoteForm({ title, body, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
  Title name:
      <input type='text' name="title" value={title} onChange={onChange} />
  Subtitle:
      <input type="text" name="subtitle" value={body} onChange={onChange} />
  Submit Text:
      <button type="submit">Submit</button>
    </form>

  );;
}

export default NoteForm;
