// ACCESSING BY ID

var demo = document.getElementById("demo")
// ACCESING BY CLASS
var demoClass=document.getElementsByClassName("demo1")

demo.innerHTML="Hi"

demoClass[0].innerHTML = "Hello"

// accesing by tag

var pTag = document.getElementsByTagName("p")
pTag[0].innerHTML = "AWESOME"


//query selector
let demo1 = document.querySelector("#demo1")
demo1.innerHTML = "Nice Guy"
demo1.style.color = "blue"
demo1.style.backgroundColor = "orange"

var demoCl = document.querySelectorAll("div.democl")
for (let i = 0; i < demoCl.length; i++){
    demoCl[i].innerHTML = "Test";
    demoCl[i].style.color = "green"
}

// events

//var showBtn = document.querySelector("#show")
document.getElementById("show").onclick = getBtn

function getBtn() {
    alert("hi")
}

function getTime() {
    alert(new Date())
}

var a = 20
console.log(a)