const input = document.getElementById("note-input");
const add_btn = document.getElementById("add-btn");
const notes_box = document.getElementById("notes-container");

let notes = [];


// load from local storage
const saved = localStorage.getItem("notes");
if(saved){
    notes = JSON.parse("notes");
    renderAll();
}

function validation(val){
    if(val.trim() === ""){
        alert("Please Enter Valid Note");
        return false ;
    }
    return true;
}

function saveNotes(){
    localStorage.setItem("notes" , JSON.stringify(notes));
}

function createNoteCard(note){
    const card_container = document.createElement("div");
    card_container.classList.add("note");

    const card_text = document.createElement("p");
    card_text.textContent = note.text;

    const edit_btn = document.createElement("button");
    edit_btn.textContent = "Edit";

    edit_btn.addEventListener("click" , ()=>{
        input.value = note.text;

        notes = notes.filter(n => n.id !== note.id);
        saveNotes();
        renderAll();
    });


    const delete_btn = document.createElement("button");
    delete_btn.textContent = "Delete";

    delete_btn.addEventListener("click" , ()=>{
        notes = notes.filter(n => n.id !== note.id);
        saveNotes();
        renderAll();
    });

    card_container.appendChild(card_text);
    card_container.appendChild(edit_btn);
    card_container.appendChild(delete_btn);

    return card_container;
}

// render all notes 
function renderAll(){
    notes_box.innerHTML = "";
    for(let i=0; i<notes.length; i++){
        const card = createNoteCard(notes[i]);
        notes_box.appendChild(card);
    }
}

add_btn.addEventListener("click", ()=>{
    const data = input.value;

    if(!validation(data)){
        return;
    }
    const newNote = {
        id:Date.now(),
        text:data
    };
    notes.push(newNote);
    saveNotes();
    renderAll();

})

