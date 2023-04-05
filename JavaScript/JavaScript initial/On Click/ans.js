let button = document.getElementById("btn");
let count = 0 ;
button.addEventListener("click", ()=>{
   count = count + 1 ;
   alert("You just Clicked !! Don't You ? For "+ count +" Times");
})