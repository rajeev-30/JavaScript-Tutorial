document.getElementById("red").style.backgroundColor = "red"
let box = document.getElementsByClassName("box")
box[0].style.backgroundColor = "green"

console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "aqua"
})

let x = document.querySelector(".box").innerHTML
console.log(x);