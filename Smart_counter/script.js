const counter = document.getElementById("count");
const up = document.querySelector("#increase");
const down = document.querySelector("#decrease");
const resetAll = document.querySelector("#reset");
const stepCount = document.querySelector("#step");

up.addEventListener("click" , ()=>{
    let current = Number(counter.textContent)
    let step = Number(stepCount.value);

    let newValue = current + step ;

    let limit = Number(document.querySelector("#limit").textContent);

    if(newValue > limit){
        up.disabled = true;
    }
    else{
        counter.textContent = newValue;
        up.disabled = false;
    }

    if(newValue == 0){

    }

    
});


down.addEventListener("click" , ()=>{
    let current=Number(counter.textContent);
    let step = Number(stepCount.value);

    let newValue = current - step;

    let limit = Number(document.querySelector("#limit").textContent);

    if(newValue <= limit){
        up.disabled = false;
    }

    counter.textContent = newValue;
});


resetAll.addEventListener("click" , ()=>{
    counter.textContent = 0 ;
    up.disabled = false;
})


function updateColor(value){
    
}