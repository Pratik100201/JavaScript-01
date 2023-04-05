let b = document.getElementById("button");
document.addEventListener("keyup",(e)=>{
    b.style.color= "green";
    b.innerText= e.key + "  Is Pressed";
});
document.addEventListener("keydown", function (s) {
    b.style.color = "red";
    b.innerText = s.key + " Is Pressed";
  });