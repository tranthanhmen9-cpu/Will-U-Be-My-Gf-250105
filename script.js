window.onload = function(){

const passwordBtn = document.getElementById("passwordBtn")
const openLetterBtn = document.getElementById("openLetterBtn")
const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")

passwordBtn.onclick = function(){

let password = document.getElementById("passwordInput").value

if(password === "123456"){

document.getElementById("passwordBox").style.display="none"
document.getElementById("letterBox").classList.remove("hidden")

}else{

document.getElementById("errorText").innerText="Sai mật khẩu"

}

}


openLetterBtn.onclick = function(){

document.getElementById("letterBox").style.display="none"
document.getElementById("confessionBox").classList.remove("hidden")

}


noBtn.onmouseover=function(){

let x=Math.random()*400
let y=Math.random()*200

noBtn.style.position="absolute"
noBtn.style.left=x+"px"
noBtn.style.top=y+"px"

}


yesBtn.onclick=function(){

document.getElementById("confessionBox").style.display="none"
document.getElementById("successBox").classList.remove("hidden")

}

}
