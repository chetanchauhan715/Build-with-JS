const inputLen = document.getElementById("length");
const upper = document.getElementById("uppercase");
const lower = document.getElementById("lowercase");
const num = document.getElementById("numbers");
const symbol = document.getElementById("symbols");
const pass = document.getElementById("newpass");

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let special = "~@#$%^&*{]}[!|/";


let newPass = "";
const generate = document.getElementById("generate");

generate.addEventListener("click" , (e)=>{
    e.preventDefault();
    let allowed = "";
    if(upper.checked){
        allowed += uppercase;
    }
    if(lower.checked){
        allowed += lowercase;
    }
    if(num.checked){
        allowed += numbers;
    }
     if(symbol.checked){
        allowed += special;
    } 

    if(allowed.length === 0){
        pass.textContent = "Please Select Valid Check Marks";
        return ;
    }

    const len = Number(inputLen.value) || 5;

    newPass = "";

    for(let index =0; index < len; index++ ){
    let i = Math.floor(Math.random() * allowed.length); 
        newPass += allowed[i];
    }
    // console.log(newPass);

    strength(len);

    pass.textContent = newPass

    // console.log("File Run")

});

const copypass = document.getElementById("copy");

copypass.addEventListener("click" , ()=>{
    if(newPass.length === 0){
        return;
    }  else{
        navigator.clipboard.writeText(newPass);
    }
});


function strength(length){
    if(length <= 8 ){
        // pass.style.background = "white";
        pass.style.color = "red";
    } else {
        pass.style.color = "green";
    }
}

