const addBtn = document.getElementById("addBtn");

const note = JSON.parse(localStorage.getItem("addBtn"));

if (note) {
    note.forEach((note) => {
        addNewNote(note);
    });
}

addBtn.addEventListener("click", () => {
    addNewNote();
})

function addNewNote(text = "") {
    const newNote = document.createElement("div");
    newNote.classList.add("container");

    newNote.innerHTML = `
    <div class="notes">
        <div class="tools">
            <button class="save"><i class="fa fa-save"></i></button>
            <button class="edit"><i class="fa fa-edit"></i></button>
            <button class="delete"><i class="fa fa-trash"></i></button>
        </div>
        <div class="mains ${text ? "" : "hidden"}"></div>
        <textarea name="noteText" class="${text ? "hidden" : ""}" id="text" cols="30" rows="10"></textarea>
    </div>`

    const saveBtn = newNote.querySelector(".save");
    const editBtn = newNote.querySelector(".edit");
    const deleteBtn = newNote.querySelector(".delete");
    const mains = newNote.querySelector(".mains");
    const textArea = newNote.querySelector("#text");

    textArea.value = text;
    mains.innerHTML = marked(text);

    saveBtn.addEventListener("click", () => {
        textArea.disabled = true;
    })

    editBtn.addEventListener("click", () => {
        textArea.classList.toggle("hidden");
        textArea.disabled = false;
        updateLS();
    });

    deleteBtn.addEventListener("click", () => {
        newNote.remove();
    });

    textArea.addEventListener("input", (e) => {
        const { value } = e.target;

        mains.innerHTML = marked(value);

        updateLS();
    });


    document.body.appendChild(newNote);
}

function updateLS() {
    const notesText = document.querySelectorAll("textarea");

    const notes = [];

    notesText.forEach((note) => {
        notes.push(note.value);
    });

    localStorage.setItem("addBtn", JSON.stringify(notes));
}