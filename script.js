document.addEventListener("DOMContentLoaded", function () {

function checkPassword(){

let password = document.getElementById("passwordInput").value
let correctPassword = "2501200510032005"

if(password === correctPassword){

document.getElementById("passwordBox").style.display = "none"
document.getElementById("letterBox").classList.remove("hidden")

}else{

document.getElementById("errorText").innerText = "Sai mật khẩu rồi 😢"

}

}

window.checkPassword = checkPassword


function openLetter(){

document.getElementById("letterBox").style.display = "none"
document.getElementById("confessionBox").classList.remove("hidden")

}

window.openLetter = openLetter



const noBtn = document.getElementById("noBtn")

if(noBtn){

noBtn.addEventListener("mouseover", function(){

let x = Math.random() * window.innerWidth * 0.7
let y = Math.random() * window.innerHeight * 0.5

noBtn.style.position = "absolute"
noBtn.style.left = x + "px"
noBtn.style.top = y + "px"

})

}



const yesBtn = document.getElementById("yesBtn")

if(yesBtn){

yesBtn.addEventListener("click", function(){

document.getElementById("confessionBox").style.display = "none"

document.getElementById("successBox").classList.remove("hidden")

startFireworks()

})

}



function startFireworks(){

const canvas = document.getElementById("fireworks")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

function createFirework(){

let x = Math.random()*canvas.width
let y = Math.random()*canvas.height

for(let i=0;i<80;i++){

particles.push({

x:x,
y:y,
vx:(Math.random()-0.5)*8,
vy:(Math.random()-0.5)*8

})

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

if(Math.random()<0.05){

createFirework()

}

particles.forEach(p=>{

ctx.beginPath()
ctx.arc(p.x,p.y,3,0,Math.PI*2)
ctx.fillStyle="gold"
ctx.fill()

p.x+=p.vx
p.y+=p.vy

})

requestAnimationFrame(animate)

}

animate()

}

})
