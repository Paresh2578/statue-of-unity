console.log("hello statue of unite")

// variable
let menu = document.getElementById('menu');
let menubar = document.getElementById('menubar');
let closeMenubar = document.getElementById('closeMenubar');
let body = document.getElementById('body');
let nav = document.getElementById('nav');
let container = document.getElementById('container');


menu.addEventListener('click' , ()=>{
    menubar.style.display = "block";
    menu.style.display = "none";
    container.style.background = "rgba(0, 0, 0, 0.2)";
})

closeMenubar.addEventListener('click' , ()=>{
    menubar.style.display = "none";
    menu.style.display = "block";
    body.style.background = "";
})


