let head = document.getElementById("dis");
let input = document.getElementById("input");

input.addEventListener("keypress",(s)=>{
    head.innerText="You have pressed "+ s.key
})