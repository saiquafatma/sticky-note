document.addEventListener("DOMContentLoaded", function() {
    let textarea = document.querySelector("#textarea");
    let textColorPicker = document.querySelector("#text-color");
    let bgColorPicker = document.querySelector("#bg-color");
    let addButton = document.querySelector("#add-note");
    let notesContainer = document.querySelector(".right-container-notes");
    let notesNotAdded = document.querySelector(".notes-not-added");

    addButton.addEventListener("click", function() {
        let noteText = textarea.value.trim();
        if (noteText === "") {
            textarea.classList.add("animate__shakeX");
            alert("Enter Some Text");
            return;
        }
        textarea.classList.remove("animate__shakeX");
        addNoteElement(noteText, textColorPicker.value, bgColorPicker.value);
        textarea.value = "";
        notesNotAdded.style.display = "none";
    });

    function addNoteElement(noteText, textColor, bgColor) {
        let noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.style.color = textColor;
        noteElement.style.backgroundColor = bgColor;
        noteElement.innerHTML = `<p>${noteText}</p><button class="remove-button">X</button>`;
        notesContainer.appendChild(noteElement);

        let removeButton = noteElement.querySelector(".remove-button");
        removeButton.addEventListener("click", function() {
            noteElement.remove();
            if (notesContainer.children.length === 0) {
                notesNotAdded.style.display = "block";
            }
        });
    }
});