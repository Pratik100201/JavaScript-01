let down = document.getElementById("dBtn");
let up = document.getElementById("aBtn");
let count = document.getElementById("Counter");
let zero = document.getElementById("Reset");

// For Increament 
up.addEventListener("click", ()=>{
    let value = Number(count.innerText);
    if(value>=10){
        alert("Value greater than 10 are not allowed")
    }
    else{
        count.innerText= value + 1 ;
    }
});

// reset button
zero.addEventListener("click", ()=>{
    count.innerText = 0;
});
   
//  Decreament 
down.addEventListener("click",()=>{
 let value = Number(count.innerText);
 if( value <= 0){
    alert("Value Less than 0 is not allowed")
 }
 else{
    count.innerText = value - 1 ;
 }
});
