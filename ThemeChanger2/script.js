console.log("Script loaded")
let body = document.getElementById("body")
let button = document.getElementById("switch")

function loaded() {
    body.classList.toggle("body")
}

button.onclick = function(){
    button.classList.toggle("moon")
}