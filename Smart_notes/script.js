const input = document.getElementById("note-input");
const add_btn = document.getElementById("add-btn");
const notes_box = document.getElementById("notes-container");

notes = [];

let saved = localStorage.getItem("notes");

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
        let current_text = card_text.innerText;
        // console.log(current_text);
        input.value = current_text;
        card_container.remove();

    });

    const delete_btn = document.createElement("button");
    delete_btn.textContent = "Delete";

    delete_btn.addEventListener("click" , ()=>{
        card_container.remove();
    });

    card_container.appendChild(card_text);
    card_container.appendChild(edit_btn);
    card_container.appendChild(delete_btn);
    notes_box.appendChild(card_container);
    

    input.value = "";
});
