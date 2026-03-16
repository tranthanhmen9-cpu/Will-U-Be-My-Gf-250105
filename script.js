function openLetter(){

document.getElementById("letterBox").style.display="none"

document.getElementById("confessionBox").classList.remove("hidden")

}

const noBtn=document.getElementById("noBtn")

noBtn.addEventListener("mouseover",moveButton)

function moveButton(){

let x=Math.random()*300
let y=Math.random()*200

noBtn.style.position="absolute"

noBtn.style.left=x+"px"
noBtn.style.top=y+"px"

}

document.getElementById("yesBtn").onclick=function(){

document.getElementById("confessionBox").style.display="none"

document.getElementById("successBox").classList.remove("hidden")

startFireworks()

}

function startFireworks(){

const canvas=document.getElementById("fireworks")

const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<250;i++){

particles.push({

x:canvas.width/2,
y:canvas.height/2,

vx:(Math.random()-0.5)*8,
vy:(Math.random()-0.5)*8,

life:100

})

}

function animate(){

ctx.fillStyle="rgba(0,0,0,0.2)"

ctx.fillRect(0,0,canvas.width,canvas.height)

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
