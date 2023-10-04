document.addEventListener("DOMContentLoaded", function () {
    //Declare Variables 
    const note_Input = document.getElementById("note_input");
    const note_Colour = document.getElementById("note_color");
    const note_Add = document.getElementById("add_button");
    const note_Display = document.getElementById("note_display");

    note_Add.addEventListener("click", function () {
        const note_Text = note_Input.value;
        const note_Color = note_Colour.value;
        

        //For the note list
        const note_Element = document.createElement("div");
        note_Element.classList.add("note");
        note_Element.style.backgroundColor = note_Color;
        note_Element.innerHTML = `
            <p>${note_Text}</p>
            <button class="edit_button">Edit</button>
            <button class="delete_button">Delete</button>
        `;

        note_Display.appendChild(note_Element);
        note_Input.value = "";
    });

    //Edit the Note Text
    note_Display.addEventListener("click", function (e) {
        if (e.target.classList.contains("edit_button")) {
            const note = e.target.parentElement;
            const note_Text = note.querySelector("p").textContent;
            const note_Color = note.style.backgroundColor;

            note_Input.value = note_Text;
            note_Colour.value = note_Color;

            //Remove the old unedited note
            note_Display.removeChild(note);

        } else if (e.target.classList.contains("delete_button")) {
            const note = e.target.parentElement;
            
            //Delete the Note
            note_Display.removeChild(note);
        }
    });
});
