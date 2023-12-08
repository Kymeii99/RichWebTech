import React, { useEffect, useState } from 'react';
import './App.css';
import TimeDisplay from './component/TimeDisplay';
import axios from 'axios';
import AddNoteForm from './component/AddNoteForm';
import NotesList from './component/NoteList';
import RandomQuote from './component/RandomQuote';

function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [noteColor, setNoteColor] = useState('#f0f0f0');
  const [quote, setQuote] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Generating Random Quote for inspiration
  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      const data = response.data;
      setQuote(`${data.content} - ${data.author}`);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  // for the time and date
  const fetchCurrentTime = async () => {
    try {
      const response = await axios.get('http://worldtimeapi.org/api/timezone/Europe/Dublin');
      const data = response.data;
      
      // Extract and format the time (HH:mm:ss)
      const timeString = new Date(data.datetime).toLocaleTimeString();
      
      setCurrentTime(timeString);
    } catch (error) {
      console.error('Error fetching Ireland time:', error);
    }
  };

  useEffect(() => {
    fetchCurrentTime();
  }, []);

  //for the notes
  const addNote = () => {
    if (noteText.trim() === '') return;

    const newNote = {
      text: noteText,
      color: noteColor,
    };

    setNotes([...notes, newNote]);
    setNoteText('');
  };

  const editNote = (index) => {
    const editedNote = notes[index];
    setNoteText(editedNote.text);
    setNoteColor(editedNote.color);
    deleteNote(index);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  // Set for Notes
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Added to sort the notes
  const sortNotes = () => {
    const sortedNotes = [...notes].sort((a, b) => a.text.localeCompare(b.text));
    setNotes(sortedNotes);
  };

  return (
    <div className="note_body">
      {/* API Ireland Displaying the time */}
      <TimeDisplay currentTime={currentTime} />
      <h1>Notes</h1>
      <input
        type="text"
        className="searchInput"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <AddNoteForm
        noteText={noteText}
        noteColor={noteColor}
        onTextChange={(e) => setNoteText(e.target.value)}
        onColorChange={(e) => setNoteColor(e.target.value)}
        onAdd={addNote}
        onSort={sortNotes}
      />
      <NotesList notes={filteredNotes} onEdit={editNote} onDelete={deleteNote} />
      {/* API to generate random Quotes */}
      <RandomQuote quote={quote} onFetchRandomQuote={fetchRandomQuote} />
    </div>
  );
}

export default App;
