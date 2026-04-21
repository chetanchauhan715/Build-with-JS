const input = document.getElementById("note-input");
const add_btn = document.getElementById("add-btn");
const notes_box = document.getElementById("notes-container");

let notes = [];

const saved = localStorage.getItem("notes");

if(saved){
    notes = JSON.parse(saved);

    for(let i=0; i<notes.length; i++){
        const data = notes[i];

        const card_container = document.createElement("div");
        card_container.classList.add("note");

        const card_text = document.createElement("p");
        card_text.textContent = data;

        const edit_btn = document.createElement("button");
        edit_btn.textContent = "Edit";

        const delete_btn = document.createElement("button");
        delete_btn.textContent = "Delete";

        edit_btn.addEventListener("click" , ()=>{
            input.value = data;
            
            notes.splice(i , 1);

            localStorage.setItem("notes" , JSON.stringify(notes));

            card_container.remove();
        });

        delete_btn.addEventListener("click" , ()=>{
            notes.splice(i , 1);
            localStorage.setItem("notes" , JSON.stringify(notes));
            card_container.remove();
        });

        card_container.appendChild(card_text);
        card_container.appendChild(edit_btn);
        card_container.appendChild(delete_btn);

        notes_box.appendChild(card_container);
    }
}


function validation(val){
    if(val.trim() === ""){
        alert("Please Enter Valid Note");
        return false ;
    }
    return true;
}

add_btn.addEventListener("click" , ()=>{
    const data = input.value;
    if(!validation(data)){
       return ;
    }
    notes.push(data);
    localStorage.setItem("notes" , JSON.stringify(notes));
    const card_container = document.createElement("div");
    card_container.classList.add("note");
    const card_text = document.createElement("p");
    card_text.textContent = data;

    const edit_btn = document.createElement("button");
    edit_btn.textContent = "Edit";
    edit_btn.addEventListener("click", ()=>{
        input.value = data;

        let index = notes.indexOf(data);
        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));

    card_container.remove();

    });

    const delete_btn = document.createElement("button");
    delete_btn.textContent = "Delete";

    delete_btn.addEventListener("click" , ()=>{
        let index = notes.indexOf(data);
        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        card_container.remove();
    });

    card_container.appendChild(card_text);
    card_container.appendChild(edit_btn);
    card_container.appendChild(delete_btn);
    notes_box.appendChild(card_container);
    

    input.value = "";
});
