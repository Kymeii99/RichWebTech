
import React from 'react';

const Note = ({ note, onEdit, onDelete }) => {
  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <p>{note.text}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Note;
