
import React from 'react';
import Note from './Note';

const NotesList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="note_display">
      {notes.map((note, index) => (
        <Note
          key={index}
          note={note}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default NotesList;
