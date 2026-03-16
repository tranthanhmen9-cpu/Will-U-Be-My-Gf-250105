const passwordInput = document.getElementById("passwordInput")
const openLetter = document.getElementById("openLetter")
const yes = document.getElementById("yes")
const no = document.getElementById("no")

function showPage(id){

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active")
})

document.getElementById(id).classList.add("active")

}


passwordInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){

if(passwordInput.value==="250105310105"){

showPage("letterPage")

}else{

document.getElementById("error").innerText="Sai mật khẩu 😢"

}

}

})


openLetter.onclick=function(){

showPage("confessionPage")

}


no.onmouseover=function(){

let x=Math.random()*300
let y=Math.random()*200

no.style.position="absolute"

no.style.left=x+"px"
no.style.top=y+"px"

}


yes.onclick=function(){

showPage("successPage")

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
