document.addEventListener("DOMContentLoaded", function () {
    const { fromEvent } = rxjs;
    const { filter } = rxjs.operators;

    // Get references to the HTML elements by their IDs
    const note_Display = document.getElementById("note_display");
    const note_Input = document.getElementById("note_input");
    const note_Colour = document.getElementById("note_color");
    const add_Button = document.getElementById("add_button");

    // Create observables for DOM elements and events
    const addButtonClick$ = fromEvent(add_Button, 'click');
    const displayClick$ = fromEvent(note_Display, 'click');

    // Subscribe to add note button click event
    addButtonClick$.subscribe(() => addNote());

    // Subscribe to edit or delete note button click event
    displayClick$.subscribe((event) => {
        const target = event.target;

        if (target.classList.contains("edit_button")) {
            const note = target.closest(".note");
            const note_Text = note.querySelector("p").textContent;
            const note_Color = note.style.backgroundColor;

            note_Input.value = note_Text;
            note_Colour.value = note_Color;

            note_Display.removeChild(note);
        } else if (target.classList.contains("delete_button")) {
            const note = target.closest(".note");
            note_Display.removeChild(note);
        }
    });

    // Function to add a new note
    function addNote() {
        const note_Text = note_Input.value;
        const note_Color = note_Colour.value;

        const note_Element = createNoteElement(note_Text, note_Color);
        note_Display.appendChild(note_Element);
        note_Input.value = "";
    }

    // Function to create a note element
    function createNoteElement(note_Text, note_Color) {
        const note_Element = document.createElement("div");
        note_Element.classList.add("note");
        note_Element.style.backgroundColor = note_Color;
        note_Element.innerHTML = `
            <p>${note_Text}</p>
            <button class="edit_button">Edit</button>
            <button class="delete_button">Delete</button>
        `;
        return note_Element;
    }
});
