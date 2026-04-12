const toggle_btn = document.getElementById("toggle");
const card = document.querySelector(".card-container");
toggle_btn.addEventListener( 'click' , ()=>{
    card.classList.toggle("dark-card");
    console.log(card.classList);

// manual way for toggle - on or off 

    // if(card.classList.contains("dark-card")){
    //     card.classList.remove("dark-card");
    // } else{
    //     card.classList.add("dark-card")
    // }
    
});



