document.addEventListener("DOMContentLoaded", function () {
    // import functions and operators from RxJS
    const { fromEvent } = rxjs;
    const { filter } = rxjs.operators;

    // Define a note class to represent notes and their relationships
    class Note {
        constructor(text, color, parent = null) {
            this.text = text;
            this.color = color;
            this.parent = parent;
            this.children = [];
        }

        // Add a child note to the current note
        addChild(childNote) {
            this.children.push(childNote);
        }

        // Remove a child note from the current note
        removeChild(childNote) {
            const index = this.children.indexOf(childNote);
            if (index !== -1) {
                this.children.splice(index, 1);
            }
        }
    }

    // HTML Elements
    const note_Display = document.getElementById("note_display");
    const note_Input = document.getElementById("note_input");
    const note_Colour = document.getElementById("note_color");
    const add_Button = document.getElementById("add_button");

    //Create an observable for the click event on the add button
    const addButtonClick$ = fromEvent(add_Button, 'click');

    // Subcribe to the add button click event
    addButtonClick$.subscribe(() => addNote());

    // function to add a new note to be display
    function addNote() {
        const note_Text = note_Input.value;
        const note_Color = note_Colour.value;

        // create a new note instance
        const newNote = new Note(note_Text, note_Color);

        // Create DOM element for the new note and append
        const note_Element = createNoteElement(newNote);
        note_Display.appendChild(note_Element);

        // Clear the input field after adding the note
        note_Input.value = "";
    }

    // Function to create a DOM element for given note
    function createNoteElement(note) {
        const note_Element = document.createElement("div");
        note_Element.classList.add("note");
        note_Element.style.backgroundColor = note.color;
        note_Element.innerHTML = `
            <p>${note.text}</p>
            <button class="edit_button">Edit</button>
            <button class="delete_button">Delete</button>
        `;

        // reference to edit and delete button with note element
        const editButton = note_Element.querySelector(".edit_button");
        const deleteButton = note_Element.querySelector(".delete_button");

        // Attach event listeners to edit and delete the buttons
        editButton.addEventListener("click", () => editNote(note, note_Element));
        deleteButton.addEventListener("click", () => deleteNoteAndChildren(note, note_Element));

        return note_Element;
    }

    // Function to edit the content of a note
    function editNote(note, note_Element) {
        // set the input color values to match the selected note
        note_Input.value = note.text;
        note_Colour.value = note.color;

        // remove the selected note from the display
        note_Display.removeChild(note_Element);
    }

    // function to delete a note and its children recursively
    function deleteNoteAndChildren(note, note_Element) {
        const parentNote = note.parent;
        if (parentNote) {
            // if the note has parent, remove it from the parent's children
            parentNote.removeChild(note);
        } else {
            note_Display.removeChild(note_Element);
        }

        // Recursively delete children
        note.children.forEach(child => deleteNoteAndChildren(child, note_Element));
    }
});
