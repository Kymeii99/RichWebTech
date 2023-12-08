// AddNoteForm.js
import React from 'react';

const AddNoteForm = ({ noteText, noteColor, onTextChange, onColorChange, onAdd, onSort }) => {
  return (
    <div className="note_field">
      <input
        type="text"
        value={noteText}
        onChange={onTextChange}
        placeholder="Enter here!"
      />
      <select value={noteColor} onChange={onColorChange}>
            <option value="rgb(199, 237, 212)">Sage Green</option>
            <option value="rgb(225, 190, 176)">Peach</option>
            <option value="rgb(229, 188, 240)">Lilac</option>
            <option value="rgb(144, 109, 105)">Brown</option>
      </select>
      <button onClick={onAdd}>Add Note</button>
      <button onClick={onSort}>Sort Notes</button>
    </div>
  );
};

export default AddNoteForm;
