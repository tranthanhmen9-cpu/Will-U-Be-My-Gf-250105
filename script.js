const passwordBtn=document.getElementById("passwordBtn")
const openLetterBtn=document.getElementById("openLetterBtn")

const yesBtn=document.getElementById("yesBtn")
const noBtn=document.getElementById("noBtn")

passwordBtn.onclick=function(){

let password=document.getElementById("passwordInput").value

if(password==="250105"){

document.getElementById("passwordPage").classList.add("hidden")

document.getElementById("letterPage").classList.remove("hidden")

}else{

document.getElementById("error").innerText="Sai mật khẩu 😢"

}

}



openLetterBtn.onclick=function(){

document.getElementById("letterPage").classList.add("hidden")

document.getElementById("confessionPage").classList.remove("hidden")

}



noBtn.onmouseover=function(){

let x=Math.random()*300
let y=Math.random()*200

noBtn.style.position="absolute"

noBtn.style.left=x+"px"

noBtn.style.top=y+"px"

}



yesBtn.onclick=function(){

document.getElementById("confessionPage").classList.add("hidden")

document.getElementById("successPage").classList.remove("hidden")

startFireworks()

}



function startFireworks(){

const canvas=document.getElementById("fireworks")

const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

function createFirework(){

let x=Math.random()*canvas.width
let y=Math.random()*canvas.height

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
